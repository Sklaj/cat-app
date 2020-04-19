export interface IPet {
    id: string;
    type: number;
    sex: number;
    name: string;
    age: number;
    breed: string;
}

const petsInitialState: IPet[] = [];

export const petsReducer = function (petsState  = petsInitialState, action: any) {
    switch (action.type) {
        case "SET_PETS":
            return [...petsState, ...action.pets];
        case "RESET_PETS":
            return [];
        default:
            return petsState;
    }
};
