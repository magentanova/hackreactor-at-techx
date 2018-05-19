import {deepSetNode} from '../utils.js'

const initialState = {
	adMetaLoading: false,
	adMetaData: {
		rows: [],
		header: []
	},
	dedupeLoading: false,
	dedupeResult: {},
	dedupeSources: [],
	formData: {},
	networkNames: [],
	scheduleData: {
		rows: [],
		header: []
	},
	scheduleLoading: false,
	subformChoices: [],
	audienceDetail: {
		stats: {
			ntiles: []
		}
	},
	audienceDetailLoading: false,
	tickets: [],
	ticketFilter: {
		submission_time: 'ever',
		report_status: 'all',
		requester: 'me',
		report_type: 'all'
	},
	ticketsLoading: false
}


const loadingReducer = function(attrName) {
	var titleCase = function(str) {
		var words = str.split(/\s/g),
			newWords = words.map( word => word[0].toUpperCase() + word.slice(1))
		return newWords.join(' ')
	}

	var camelCaseName = attrName[0] + titleCase(attrName).slice(1).replace(/\s/g,''),
		snakeCaseName = attrName.replace(/\s/g,'_')
	return (state = initialState[camelCaseName + 'Loading'], action) => {
		switch(action.type) {
			case (snakeCaseName + '_LOADING').toUpperCase():
				return true
			case (snakeCaseName + '_LOADED').toUpperCase():
				return false
			default: 
				return state
		}
	}
}

export const adMetaData = (state = initialState.adMetaData, action) => {
	switch (action.type) {
		case 'AD_META_LOADED':
			return action.data 
		default: 
			return state
	}
}

export const adMetaLoading = loadingReducer('ad meta')

export const audienceDetail = (state = initialState.audienceDetail, action) => {
	switch (action.type) {
		case 'AUDIENCE_DETAIL_LOADED':
			return action.data 
		default: 
			return state
	}
}

export const audienceDetailLoading = loadingReducer('audience detail')

export const dedupeLoading = loadingReducer('dedupe')

export const dedupeResult = (state = initialState.dedupeResult, action) => {
	switch (action.type) {
		case 'UPDATE_DEDUPE_RESULT':
			return {
				url: action.result.url,
				count: action.result.count.toLocaleString()
			}
		default:
			return state
	}
}

export const dedupeSources = (state = initialState.dedupeSources, action) => {
	switch (action.type) {
		case 'UPDATE_DEDUPE_SOURCES':
			return action.sources 
		default:
			return state
	}
}

export const formData = (state = initialState.formData, action) => {
	switch (action.type) {
		case 'UPDATE_FORM':
			let keyList = action.keyList,
				keysCopy = keyList.map(key => key),
				newState = JSON.parse(JSON.stringify(state))
			deepSetNode(newState, keysCopy, action.update)
			return newState
		default: 
			return state
	}
}

export const networkNames = (state = initialState.networkNames, action) => {
	switch (action.type) {
		case 'NETWORKS_LOADED':
			return action.networkNames
		default:
			return state
	}
}

export const scheduleData = (state = initialState.scheduleData, action) => {
	switch (action.type) {
		case 'SCHEDULE_LOADED':
			return action.scheduleData
		default:
			return state
	}
}

export const scheduleLoading = loadingReducer('schedule')

export const subformChoices = (state = initialState.subformChoices, action) => {
	switch (action.type) {
		case 'SUBFORM_CHOSEN':
			let newState = state.slice(0,action.level + 1)
			newState[action.level] = action.choice
			return newState
		default: 
			return state
	}
}

export const tickets = (state = initialState.tickets, action) => {
	switch (action.type) {
		case 'TICKETS_LOADED':
			return action.data
		default:
			return state
	}
}

export const ticketFilter = (state = initialState.ticketFilter, action) => {
	switch (action.type) {
		case 'TICKET_FILTER':
			let newFilter = Object.assign({},state,action.filter)
			Object.keys(newFilter).forEach(key => {
				if (['Any','All','Ever'].includes(key)) {
					delete newFilter[key]
				}
			})
			return newFilter
		default: 
			return state
	}
}

export const ticketsLoading = loadingReducer('tickets')
// export const ticketsLoading = (state = initialState.ticketsLoading, action) => {
// 	switch (action.type) {
// 		case 'TICKETS_LOADING':
// 			return true
// 		case 'TICKETS_LOADED':
// 			return false
// 		default:
// 			return state
// 	}
// }
