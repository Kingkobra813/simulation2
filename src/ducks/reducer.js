const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    monthMort: '',
    desiredMonth: ''
}

const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UDATE_STATE"
const UPDATE_ZIP = "UPDATE_ZIP"
const UPDATE_IMG = "UPDATE_IMG"
const UPDATE_MONTH_MORT = "UPDATE_MONTH_MORT"
const UPDATE_DESIRED = "UPDATE_DESIRED"

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return Object.assign({}, state, { name: action.payload })
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload })
        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload })
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.payload })
        case UPDATE_ZIP:
            return Object.assign({}, state, { zip: action.payload })
        case UPDATE_IMG:
            return Object.assign({}, state, { img: action.payload })
        case UPDATE_MONTH_MORT:
            return Object.assign({}, state, { monthMort: action.payload })
        case UPDATE_DESIRED:
            return Object.assign({}, state, { desiredMonth: action.payload })
        default: return state
    }
}

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZip(zip) {
    return {
        type: UPDATE_ZIP,
        payload: zip
    }
}

export function updateImg(img) {
    return {
        type: UPDATE_IMG,
        payload: img
    }
}

export function updateMonthMort(mortgage) {
    return {
        type: UPDATE_MONTH_MORT,
        payload: mortgage
    }
}

export function updateDesired(rent) {
    return {
        type: UPDATE_DESIRED,
        payload: rent
    }
}

export default reducer