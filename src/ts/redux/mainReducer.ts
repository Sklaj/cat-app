import {combineReducers} from 'redux'


//------------UserReducer

export interface IUserProfile {
    id: number | null;
    name: string | null;
    email: string | null;
    pets: number[] | null;
}

const userInitialState = {
        id: null,
        name: null,
        email: null,
        pets: []
};

const userReducer = function (userProfile: IUserProfile = userInitialState, action: any) {
    switch (action.type) {
        case "SET_PROFILE":
            return {...action.profile};
        default:
            return userProfile;
    }
};



//----------- Pets reducer

export interface IPet {
    id: number;
    name: string;
    age: number;
    weight: number;
    sex: "male" | "female"
    breed: string;
}

export interface IPetState {
    pets: IPet[] | [];
}

const petsInitialState: IPetState = {pets: []};

const petsReducer = function (petsState: IPetState = petsInitialState, action: any) {
    switch (action.type) {
        case "SET_PETS":
            return {pets: [...action.pets]};
        default:
            return petsState;
    }
};


//-------------Combined
export interface IStore {
    userProfile: IUserProfile;
    pets: IPetState
}

export const mainReducer = combineReducers({
    userProfile: userReducer,
    pets: petsReducer
});
