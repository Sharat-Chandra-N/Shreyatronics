import React,{useReducer, useContext} from 'react'
import reducer from '../Reducer/AdminReducer'
import {UPDATE_LOGIN_COUNT, UPDATE_LOGIN_STATUS} from '../Action'

const getLoginCount = () => {
    let count = localStorage.getItem('loginCount')
    if(count){
        return JSON.parse(localStorage.getItem('loginCount')) + 1
    }
    else{
        return 0
    }
}

const initialState = {
    loginCount : getLoginCount(),
    loggedIn : false
}

const AdminContext = React.createContext()

export const AdminProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const updateLoginCount = () => {
        dispatch({type : UPDATE_LOGIN_COUNT})
        localStorage.setItem('loginCount',JSON.stringify(state.loginCount))
    }

    const updateLoginStatus = () => {
        dispatch({type : UPDATE_LOGIN_STATUS})
    }

    return <AdminContext.Provider
        value ={{
            ...state,
            updateLoginCount,
            updateLoginStatus
        }}
    >{children}</AdminContext.Provider>

}

export const useAdminContext = () => {
    return useContext(AdminContext)
}