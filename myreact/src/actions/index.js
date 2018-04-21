import axios from 'axios';

export const FETCH_BEARS = 'fetch_bears';
export const ADD_BEARS = 'add_bears';
const ROOT_URL = 'http://localhost/api/bears';

export const fetchBears = () => {
    const request = axios.get(ROOT_URL);

    return {
        type: FETCH_BEARS,
        payload: request
    };
}

export const addBears = async (user, callback) => {
    let response = await axios.post(ROOT_URL, user)
    await callback()
    return await {
        type: ADD_BEARS,
        payload: response 
    };
}

