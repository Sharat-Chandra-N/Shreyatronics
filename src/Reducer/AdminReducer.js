import {UPDATE_LOGIN_COUNT, UPDATE_LOGIN_STATUS} from '../Action'

const AdminReducer = (state,action) => {
    
    if(action.type === UPDATE_LOGIN_COUNT){
        const tempLoginCount = state.loginCount
        return{
            ...state,
            loginCount : tempLoginCount + 1
        }
    }

    if(action.type === UPDATE_LOGIN_STATUS){
        const tempStatus = state.loggedIn
        return{
            ...state,
            loggedIn : !tempStatus,
            loginCount : 0
        }
    }

    throw new Error (`${action.type} is NOT FOUND`)
}
 
export default AdminReducer;