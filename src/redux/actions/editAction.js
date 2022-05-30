

import { POST_USER } from "../constant/constant";

import axios from "axios";

const editAction = (editdata) => async (dispatch) => {
    console.log(editdata,"--------editdata");
    try {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${editdata.id}`,editdata)

        console.log(res.data , "-------------Post res");

        dispatch({ type: POST_USER , payload: res.data })

        console.log(res.data,"----------payload");

    } catch (error) {
        console.log(error);
    }
}


export default editAction

























// const editAction = (data) =>{
//     return{
//         type:"EDIT_USER",
//         payload:data
//     }
// }
// export default editAction