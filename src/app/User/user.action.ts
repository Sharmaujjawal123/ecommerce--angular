import {createAction,props} from "@ngrx/store"

export const getUserProfile =createAction('[UserProfile] getUser Profile')

export const getUserProfileSuccess =createAction('[UserProfile] getUser Profile Success', props<{userProfile:any}>())

export const getUserProfileFailure =createAction('[UserProfile] getUser Profile fauilure', props<{error:any}>())

export const logoutSuccess = createAction('[User] Logout Success')