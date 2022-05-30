import { ADD_USER } from "../constant/constant";

import axios from "axios";

export const addAction = (adddata) => async (dispatch) => {
    console.log(adddata,"-----add data");
    try {
        const res = await axios.post("https://jsonplaceholder.typicode.com/users",adddata)

        dispatch({ type: ADD_USER, payload: res.data})
        
        {console.log(res.data,"-------res   in action file")}


    } catch (error) {
        console.log(error);
    }
}

export default addAction