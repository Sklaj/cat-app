import {auth, db} from "../../../firebase";
import {Dispatch} from "redux";

export const authCreateAndSetUserProfile = (dispatch: Dispatch) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch({
                type: "SET_PROFILE", profile: {
                    id: user.uid,
                    email: user.email,
                    isAuthenticated: true
                }
            });
            //adding user to db
            db.collection("users").doc(user.uid).set({
                id: user.uid,
                email: user.email,
            });
        }
    });

    unsubscribe();
};
