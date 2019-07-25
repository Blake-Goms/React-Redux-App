import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/index';

export const initialState = {
    error: '',
    isFetching: false,
    playerInfo: null,
} 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                joke: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                playerInfo: action.payload
            };
            case FETCH_FAILURE:
            return {
                ...state,
                error: console.log(action.payload),
                isFetching: false,
                playerInfo: null
            };
        default:
            return state;
    }
}