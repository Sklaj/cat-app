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

export const petsReducer = function (petsState: IPetState = petsInitialState, action: any) {
    switch (action.type) {
        case "SET_PETS":
            return {pets: [...action.pets]};
        default:
            return petsState;
    }
};