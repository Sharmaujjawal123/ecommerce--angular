import {createAction,props} from "@ngrx/store"

export const login =createAction('[Auth] Login', props<{email:String,password:String}>())

export const loginSuccess =createAction('[Auth] Login Success', props<{user:any}>())

export const loginFailure =createAction('[Auth] Login fauilure', props<{error:any}>())




export const register=createAction('[Auth] Register', props<{user:any}>())

export const registerSuccess =createAction('[Auth] Register Success', props<{user:any}>())

export const registerFailure =createAction('[Auth] Register Failure', props<{error:any}>())

export const getUserProfile =createAction('[UserProfile] getUser Profile')

export const getUserProfileSuccess =createAction('[UserProfile] getUser Profile Success', props<{userProfile:any}>())

export const getUserProfileFailure =createAction('[UserProfile] getUser Profile fauilure', props<{error:any}>())



