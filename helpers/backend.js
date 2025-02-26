import { get, post } from "./api";



//auth
export const postSignUp = (data) => post("/auth/sign-up",data )
export const postSignIn = (data) => post("/auth/sign-in",data )
export const fetchUserProfile = ()=> get("/users/me")
export const signOut = (data)=> post("/auth/sign-out", data)
export const signOutWithToken = (data)=> post("/auth/token-sign-out", data)

//transaction
export const postTransaction = (data)=> post("/transactions", data)
export const getTransactions = ()=> get("/transactions")
export const getAllTransaction = ()=>get("/transactions/admin")

//request money
export const postRequestMoney = (data)=> post("/transactions/balance-requests", data)
export const getAgentRequestMoney = ()=> get("/transactions/balance-requests-agent")

//total money
export const getTotalSystemMoney = ()=> get("/transactions/total")