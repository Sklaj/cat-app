import * as React from "react";
import {auth} from "../firebase/firebase";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {IUserProfile} from "../redux/reducers/userReducer";
import { map } from "lodash";


interface IProps {
    profile: IUserProfile;
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
                email: {props.profile.email}
            </div>

            <div>
                id: {props.profile.id}
            </div>

            <button onClick={() => onLogOut()}>
                wyloguj
            </button>

            <Link to="/add-pet">
                <button>
                    Dodaj zwierzaka
                </button>
            </Link>

            <div>
                {map(props.profile.pets, (pet) => {
                    return (
                        <Link to={`/pet/${pet}`} key={pet}>
                            <div>
                                {pet}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
