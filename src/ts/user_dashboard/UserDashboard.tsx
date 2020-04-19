import * as React from "react";
import {auth} from "../../firebase";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IUserProfile} from "../auth/reducers/userReducer";
import { map } from "lodash";
import {IStore} from "../../mainReducer";
import {useEffect} from "react";
import {getPetsData} from "../redux/actions/getPetData";


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

    useEffect(() => {
        getPetsData(props.profile.pets, dispatch);
    }, [props.profile.pets, dispatch]);

    const pets = useSelector((store: IStore) => store.pets.pets);

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
                {pets && map(pets, (pet) => {
                    return (
                        <li key={pet.id}>
                            <Link to={`/pet/${pet.id}`}>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.name}</p>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.age}</p>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.breed}</p>
                                <p style={{marginRight: "5px", display: "inline-block"}}>{pet.sex}</p>
                            </Link>
                        </li>
                    );
                })}
            </div>
        </>
    );
};
