import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL} from "../constant/constant";

import axios from 'axios'
export const userAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_USERS_REQUEST })

        const res = await axios.get("https://jsonplaceholder.typicode.com/users")

        dispatch({ type: GET_USERS_SUCCESS, payload: res.data })

    } catch (error) {
        dispatch({ type: GET_USERS_FAIL, payload: error.message })
    }
}





