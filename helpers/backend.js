import { get, post } from "./api";



//auth
export const postSignUp = (data) => post("/auth/sign-up",data )
export const postSignIn = (data) => post("/auth/sign-in",data )
export const fetchUserProfile = ()=> get("/users/me")
export const signOut = (data)=> post("/auth/sign-out", data)
export const signOutWithToken = (data)=> post("/auth/token-sign-out", data)