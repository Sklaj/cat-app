import * as React from "react";
import {auth} from "../firebase/firebase";
import {Link} from "react-router-dom";

interface IProps {
    email: string;
    id: string;

}

export const UserDashboard = (props: IProps) => {
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

            <button onClick={() => auth.signOut()}>
                wyloguj
            </button>

            <Link to="/add-pet">
                <button>
                    Dodaj zwierzaka
                </button>
            </Link>

            <div>

            </div>
        </>
    );
};