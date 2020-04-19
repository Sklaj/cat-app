import {auth} from "../../../firebase";

export const authSignIn = (email: string, password: string) => {
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) =>
            alert(
                `Your email or password is incorrect, please check your data, ${error}`
            )
        );
};
