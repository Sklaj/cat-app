import {combineReducers} from 'redux'
import {IPetState, petsReducer} from "./petsReducer";
import {IUserProfile, userReducer} from "./userReducer";
import {ISignInForm, signInFormReducer} from "./signInFormReducer";

//Main Reducer
export interface IStore {
    signInForm: ISignInForm;
    userProfile: IUserProfile;
    pets: IPetState
}

export const mainReducer = combineReducers({
    signInForm: signInFormReducer,
    userProfile: userReducer,
    pets: petsReducer
});
