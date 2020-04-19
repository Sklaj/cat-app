export interface ISignInForm {
    email: string;
    password: string;
}

const signInFormInitialState = {
    email: "",
    password: ""
};

export const signInFormReducer = function (signInForm = signInFormInitialState, action: any) {
    switch (action.type) {
        case "UPDATE_EMAIL":
            return {
                ...signInForm,
                email: action.email
            };
        case "UPDATE_PASSWORD":
            return {
                ...signInForm,
                password: action.password
            };
        default:
            return signInForm;
    }
};
