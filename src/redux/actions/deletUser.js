
import { DELET_USER } from "../constant/constant";
import axios from 'axios'


export const deletUser = (id) => async (dispatch) => {
    try {
        // console.log(id, "------------id");
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

        // console.log(res,"------------res");

        dispatch({ type: DELET_USER,payload:id})

    } catch (error) {
        console.log(error);
    }
}



















// const deletUser = (x) => {
//     // console.log(x,"    user id -----  deletUser");
//     return {
//         type: "GET_DELET_USER",
//         payload: x,
//     }
// }

// export default deletUser










