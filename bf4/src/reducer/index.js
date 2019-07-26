import {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from '../actions/index';

export const initialState = {
    error: '',
    isFetching: false,
    playerName: '',
    playerPlat: '',
    playerRank: '',
    playerTime: null,
} 

export const reducer = (state = initialState, action) => {    
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                error: '',
                isFetching: true,
                playerName: '',
                playerPlat:'',
                playerRank: '',
                playerTime: null,
            };
        case FETCH_SUCCESS:
                
            return {
                ...state,
                error: '',
                isFetching: false,
                playerName: [action.payload.player.name],
                playerPlat: [action.payload.player.plat],
                playerRank: [action.payload.player.rank.name],
                playerTime: [action.payload.player.timePlayed]
            };
            case FETCH_FAILURE:
            return {
                ...state,
                error: console.log(action.payload),
                isFetching: false,
                playerName: '',
                playerPlat: '',
                playerRank: '',
                playerTime: null,
            };
        default:
            return state;
    }
}