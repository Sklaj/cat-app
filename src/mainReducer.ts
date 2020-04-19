import {combineReducers} from 'redux'
import {IPetState, petsReducer} from "./ts/pet/reducers/petsReducer";
import {IUserProfile, userReducer} from "./ts/auth/reducers/userReducer";
import {ISignInForm, signInFormReducer} from "./ts/auth/reducers/signInFormReducer";
import {addPetFormReducer, IAddPetForm} from "./ts/pet/reducers/addPetFormReducer";

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
