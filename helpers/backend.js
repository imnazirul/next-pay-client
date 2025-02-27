import { get, patch, post } from "./api";



//auth
export const postSignUp = (data) => post("/auth/sign-up",data )
export const postSignIn = (data) => post("/auth/sign-in",data )
export const fetchUserProfile = ()=> get("/users/me")
export const signOut = (data)=> post("/auth/sign-out", data)
export const signOutWithToken = (data)=> post("/auth/token-sign-out", data)

//transaction
export const postTransaction = (data)=> post("/transactions", data)
export const getTransactions = ()=> get("/transactions")
export const getTransaction = (id)=> get(`/transactions/transactions/${id}`)
export const getAllTransaction = ()=>get("/transactions/admin")

//request money
export const postRequestMoney = (data)=> post("/transactions/balance-requests", data)
export const getAgentRequestMoney = ()=> get("/transactions/balance-requests-agent")

//total money
export const getTotalSystemMoney = ()=> get("/transactions/total")

//balance request
export const patchBalanceRequest = (id, data)=> patch(`/transactions/balance-requests/${id}`, data)
export const getAllBalanceRequest = ()=> get("/transactions/balance-requests")

//users
export const getUsers = (params) => get(`/users?${params}`)
export const getUser = (id) => get(`/users/${id}`)
export const patchUser = (id, data) => patch(`/users/${id}`, data)

//agents
export const getAgents = (params) => get(`/agents?${params}`)
export const getAgent = (id) => get(`/agents/${id}`)
export const patchAgent = (id, data) => patch(`/agents/${id}`, data)

