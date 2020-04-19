import {combineReducers} from 'redux'
import {IPet, petsReducer} from "./ts/pets/reducers/petsReducer";
import {IUserProfile, userReducer} from "./ts/auth/reducers/userReducer";
import {ISignInForm, signInFormReducer} from "./ts/auth/reducers/signInFormReducer";
import {addPetFormReducer, IAddPetForm} from "./ts/pets/reducers/addPetFormReducer";

//Main Reducer
export interface IStore {
    signInForm: ISignInForm;
    addPetForm: IAddPetForm;
    userProfile: IUserProfile;
    pets: IPet[]
}

export const mainReducer = combineReducers({
    //forms
    signInForm: signInFormReducer,
    addPetForm: addPetFormReducer,
    //data
    userProfile: userReducer,
    pets: petsReducer
});
