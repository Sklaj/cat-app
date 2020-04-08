import {combineReducers} from 'redux'
import {IPetState, petsReducer} from "./petsReducer";
import {IUserProfile, userReducer} from "./userReducer";
import {ISignInForm, signInFormReducer} from "./signInFormReducer";
import {addPetFormReducer, IAddPetForm} from "./addPetFormReducer";

//Main Reducer
export interface IStore {
    signInForm: ISignInForm;
    addPetForm: IAddPetForm;
    userProfile: IUserProfile;
    pets: IPetState
}

export const mainReducer = combineReducers({
    //forms
    signInForm: signInFormReducer,
    addPetForm: addPetFormReducer,
    //data
    userProfile: userReducer,
    pets: petsReducer
});
