import moment from 'moment'
import request from 'superagent'
import {dispatch} from './state/store.js'

export const arraysEqual = function(a1,a2) {
	var check = a1 && a2 && a1.length == a2.length
	if (!check) return false
	for (var i = 0; i < a1.length; i ++) {
		if (a1[i] !== a2[i]) {
			return false
		}
	}
	return true
}

export const cancelTicket = function(ticketId) {
	return request
		.del('/api/ticket/' + ticketId)
		.then(function(resp) {
			alert('ticket canceled!')
		})
		.catch(function(err) {
			alert('problem canceling report')
			console.log('<deleteerror>')
			console.log(err)
			console.log('</deleteerror')
		})
}

export const checkAuth = function() {
	return new Promise((res,rej) => {
		var token = localStorage.getItem('access_token')
		request
			.get('/api/auth/check')
			.set('Authorization', 'bearer ' + token)
			.end(function(err,resp) {
				if (err) {
					console.log('<authCheckFailure>')
					console.log(err)
					console.log(resp)
					console.log('</authCheckFailure>')
					return rej(err,resp)
				}
				localStorage.setItem('user_email',resp.body.payload)
				return res(resp)
			})
	})
}

export const deepGetNode = function(tree, keyList, create=false) {
	var subTree = tree
	while (keyList.length) {
		let idKey = keyList.splice(0,1)[0]
		if (subTree.children && subTree.children[idKey]) {
			subTree = subTree.children[idKey]
		}
		else {
			return null
		}
	}
	return subTree
}

export const deepSetNode = function(tree, keyList, updatePair) {
	if (keyList.length) {
		let idKey = keyList.splice(0,1)[0]
		if (!tree.children) {
			tree.children = {}
		}
		if (!tree.children[idKey]) {
            tree.children[idKey] = {}
        }
        deepSetNode(tree.children[idKey], keyList, updatePair)
	}
	else {
		if (!tree.selections) {
			tree.selections = updatePair
		}
		else {
			tree.selections = Object.assign({},tree.selections, updatePair)
		}
	}
}

export const filter = (iterable,func) => {
	if (iterable.constructor.name == 'Object') {
		return iterable.keys().filter(func)
	}
	else {
		return Array.prototype.filter.call(iterable,func)		
	}
}

export const filterTickets = function(ticketList, filter) {

	return ticketList.filter(ticketObj => {
				var now = moment(), 
					then = moment(ticketObj.created_at)

				// 
				// requester filter
				if (filter.requester == 'me' && ticketObj.requester_email !== localStorage.getItem('user_email')) {
					return false
				}

				// 
				// report status filter
				if (filter.report_status !== 'all' && filter.report_status !== ticketObj.report_status) {
					return false
				}
				
				// 
				// submission time filter
				if (filter.submission_time == 'today' && 
					then.format("MMM Do YY") !== now.format("MMM Do YY")) {
					return false
				}

				if (filter.submission_time == 'this_week' &&
					!isSameWeek(now, then)) {
						return false
				}

				// 
				// report type filter
				if (filter.report_type !== 'all' && filter.report_type !== normalizeName(ticketObj.report_type)) {
					return false
				}

				return true
			})
}

export const formatTime = function(dateObj) {
	return dateObj.toISOString()
}

export const getCheckedBoxes = boxes => map(filter(boxes, el => el.checked),el => el.value)

export const getNode = function(subTree, targetKey) {
	var children = subTree.children
	if (children) {
		if (children[targetKey]) {
			return children[targetKey]
		}
        else {
            for (let key in children) {
                let subTree = getNode(children[key], targetKey)
                if (subTree) {
                    return subTree
                }
            }
        }
    }
	return null
}

export const getSelectedRadio = buttons => Array.prototype.find.call(buttons, el => el.value === 'on')

export const handleLogout = props => {
	sign(request.post('/api/auth/logout'))
		.end(function(err,resp) {
			if (err) {
				console.log(err)
				alert(resp.text)
			}
			else {
				console.log(resp)
				localStorage.removeItem('access_token')
				localStorage.removeItem('user_email')
				props.history.push('/login')
			}
		})
}


export const isSameWeek = (m1,m2) => `${m1.year()}${m1.week()}` === `${m2.year()}${m2.week()}`

export const loadAudience = ticketId => {
	sign(request.get('/api/audience/' + ticketId))
		.then(resp => {
			dispatch({
				type: 'AUDIENCE_DETAIL_LOADED',
				data: resp.body
			})
		})
	dispatch({
		type: 'AUDIENCE_DETAIL_LOADING'
	})
}

export const loadTickets = () => {
	sign(request.get('/api/ticket'))	
		.end((err,resp) => {
				dispatch({
					type: 'TICKETS_LOADED',
					data: resp.body
				})
			}
		)
	dispatch({
		type: 'TICKETS_LOADING'
	})
}

export const map = (iterable,func) => Array.prototype.map.call(iterable,func)

export const modifyNode = function(formTree, targetId, func) {
	var formTree = JSON.parse(JSON.stringify(formTree))
	if (formTree.id == targetId) {
		return func(formTree)
	}
	if (formTree.gateway) {
		let choices = formTree.gateway.choices
		for (var i = 0; i < choices.length; i ++) {
			let subTree = choices[i].form 
			choices[i].form = modifyNode(subTree, targetId, func)
		}
	}
	return formTree
}

export const multiInputOnChange = function(inputVals) {
	treeInputOnChange(this.props.idKeys, this.props.name, inputVals)
}

export const normalizeName = string => string.replace(/\s/g,'_').toLowerCase()


export const printTime = seconds => {
	var floor = Math.floor,
		seconds = floor(parseInt(seconds)),
	    hrs = floor(seconds / 3600),
	    mins = floor(seconds / 60 - hrs * 60),
	    seconds = floor(seconds - hrs * 3600 - mins * 60),
	    hrsStr = hrs ? `${hrs} hours, ` : '',
	    minsStr = mins ? `${mins} minutes and ` : '',
	    secondsStr = seconds ? `${seconds} seconds` : ''
    return hrsStr + minsStr + secondsStr 
}

export const sign = (requestInProgress) => requestInProgress.set('Authorization', 'bearer ' + localStorage.getItem('access_token'))

export const submitTicket = params => {
	return sign(request.post('/api/ticket'))
		.send(params)
}

export const treeInputOnChange = (idKeys, name, value, opts) => {
	var update = {}

	update[name] = value 
	dispatch({
		type: 'UPDATE_FORM',
		keyList: idKeys,
		update: update
	})

	if (opts && opts.gateway) {
		dispatch({
			type: 'UPDATE_FORM',
			keyList: idKeys.concat([value]),
			update: {
				selected: true
			}
		})
	}
}

export const titleCase = function(str) {
	var words = str.split(/\s/g),
		newWords = words.map( word => word[0].toUpperCase() + word.slice(1))
	return newWords.join(' ')
}

export const where = function(arr,conditions) {
	return arr.filter(function(el) {
		for (let key in conditions) {
			if (el[key] !== conditions[key]) {
				return false
			}
		}
		return true
	})
}

