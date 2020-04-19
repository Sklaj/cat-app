import {auth} from "../../../firebase";

export const authCreateUser = (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password)
        .catch((error) =>
            alert(
                `Your email or password is incorrect, please check your data, ${error}`
            )
        );
};
