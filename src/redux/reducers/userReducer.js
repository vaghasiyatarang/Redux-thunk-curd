import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL ,DELET_USER ,POST_USER, ADD_USER} from "../constant/constant";
// import { PUT_USER_REQUEST, PUT_USER_SUCCESS, PUT_USER_FAIL } from "../constant/constant";

export const userReducer = (state = { user: [] }, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                loading: false, user: action.payload
            }
        case GET_USERS_FAIL:
            return {
                loading: false, error: action.payload
            }


            
        case DELET_USER :
            console.log(action.payload,"payload");
            return {

                user: (state.user ?? []).filter((u) => u.id !== action.payload)
            }




        case POST_USER : 
            {console.log(action.payload,"-------action.payload   in   reducer")}

            const index = state.user.findIndex(u => u.id === action.payload.id)

            {console.log(index,"------index")}
            {console.log(state.user,"------state.user")}
            state.user[index] = action.payload

            return {
                ...state,
                user:[...state.user]
            }


        case ADD_USER : 
            {console.log(action.payload,"-------action.payload   in   reducer")}
        return{
            // ...state,
            user : [...state.user,action.payload]
        }

        default: return state   
       
    }
}















//   old   edit

// case EDIT_USER:
            
//     console.log(action.payload, "--------- action.payload");


//     const index = state.user.findIndex(u => u.id === action.payload.id)
//     state.user[index] = action.payload

//     // console.log(state, " ++++++      payload   edit  -----------");
//     console.log({state});
//     return {
//         ...state,
//         user:[...state.user]
//     }


//     old delet
// case GET_DELET_USER:
//             state.user.splice(action.payload, 1)
//             return {
//                 loading: false, user: state.user
//             }