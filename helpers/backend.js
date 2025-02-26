import { get, post } from "./api";



//auth
export const postSignUp = (data) => post("/auth/sign-up",data )
export const postSignIn = (data) => post("/auth/sign-in",data )
export const fetchUserProfile = ()=> get("/user/me")
export const signOut = ()=> get("/auth/sign-out")