// export const LoginStart = (userCardentials)=>({
//     type:"LOGIN_START"
// })

// export const LoginSuccess = (user)=>({
//     type:"LOGIN_SUCCESS",
//     payload:user
// })

// export const LoginFailer = ()=>({
//     type:"LOGIN_FAILER",
// })

export const LoginStart = (userCardentials)=>({
    type:"LOGIN_START"
})
export const LoginSuccess = (user)=>({
    type:"LOGIN_SUCCESS",
    payload: user,
})
export const LoginFailer = ()=>({
    type:"LOGIN_FAILER"
})
export const Logout = ()=>({
    type:"LOGOUT"
})