import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchPlayer = (char) => dispatch => {
    console.log(char) //this is the user's name entered in search
    dispatch({type: FETCH_START})
    axios
        .get(`https://api.bf4stats.com/api/playerInfo?plat=pc&${char}=1`)
        .then(res => {
            console.log(res)
        dispatch({type: FETCH_SUCCESS, payload: res});
    })
    .catch(err => {
        dispatch({type: FETCH_FAILURE, payload: err});
    });
};