import {auth, db} from "../../../firebase";
import {Dispatch} from "redux";

export const setUserProfile = (dispatch: Dispatch) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
            db.collection("users").doc(user.uid).get().then(user => {
                dispatch({
                    type: "SET_PROFILE", profile: {
                        ...user.data(),
                        isAuthenticated: true
                    }
                });
            });
        }
    });

    unsubscribe();
};
