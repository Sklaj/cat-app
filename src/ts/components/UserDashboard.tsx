import * as React from "react";
import {auth} from "../firebase/firebase";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

interface IProps {
    email: string;
    id: string;
}

export const UserDashboard = (props: IProps) => {

    const dispatch = useDispatch();
    const onLogOut = async () => {
        await auth.signOut();
        await dispatch({type: "RESET_PROFILE"});
        await localStorage.removeItem("currentUser");
    };

    return (
        <>
            <div>
                Zalogowany
            </div>

            <div>
                email: {props.email}
            </div>

            <div>
                id: {props.id}
            </div>

            <button onClick={() => onLogOut()}>
                wyloguj
            </button>

            <Link to="/add-pet">
                <button>
                    Dodaj zwierzaka
                </button>
            </Link>
        </>
    );
};
