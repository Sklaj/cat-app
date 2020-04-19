import * as React from "react";
import {auth} from "../../firebase";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {IUserProfile} from "../auth/reducers/userReducer";
import {Navigation} from "./Navigation";


interface IProps {
    profile: IUserProfile;
}

export const UserDashboard = (props: IProps) => {

    const dispatch = useDispatch();
    const onLogOut = async () => {
        await auth.signOut();
        await dispatch({type: "RESET_PROFILE"});
    };

    if (!props.profile.email) {
        return (
            <h3>
                Brak użytkownika
            </h3>
        )
    }


    return (
        <>
            <h3>
                Panel zalogowanego {props.profile.email}
            </h3>

            <button onClick={() => onLogOut()}>
                wyloguj
            </button>

            <Link to="/pets/add-pet">
                <button>
                    Dodaj zwierzaka
                </button>
            </Link>

            <Navigation/>
        </>
    );
};
