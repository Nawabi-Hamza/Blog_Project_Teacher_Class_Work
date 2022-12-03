import * as React from "react"
import { useEffect } from "react"
import { createContext, useReducer } from "react"
import Reducer from "./Reducer"
import { json } from "react-router-dom"
// import { createContext } from "react"
// const INATIAL_STATE = {
//     user:null,
//     isFetching:false,
//     error:false
// }

// export const Context = createContext(INATIAL_STATE)

// export const ContextProvider = ({children})=>{
    
// }

const INATIAL_STATE = {
    // user:JSON.parse(localStorage.getItem("user")) || null,
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}

export const Context = createContext(INATIAL_STATE)

export const ContextProvider = ({children})=>{
    const [ state,dispatch ] = useReducer(Reducer,INATIAL_STATE)


    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])


    return (
    <Context.Provider value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch
    }}>
        {children}
    </Context.Provider>)
}