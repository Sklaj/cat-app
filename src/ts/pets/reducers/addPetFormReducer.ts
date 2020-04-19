export interface IAddPetForm {
    type: number;
    sex: number;
    name: string;
    age: number;
    breed: string;
}

const addPetFormInitialState = {
    type: 0,
    sex: 0,
    name: "",
    age: 0,
    breed: "",
};

export const addPetFormReducer = function (addPetForm = addPetFormInitialState, action: any) {
    switch (action.type) {
        case "UPDATE_FORM":
            return {
                ...addPetForm,
                ...action.data
            };
        case "CLEAR_FORM":
            return {
                ...addPetFormInitialState
            };
        default:
            return addPetForm;
    }
};
