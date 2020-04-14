import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IUserProfile} from "../auth/reducers/userReducer";
import {IStore} from "../../../mainReducer";
import {getPetsData} from "../../redux/actions/getPetData";
import {useEffect} from "react";
import { map } from "lodash";

export const PetView = React.memo(() => {
    const dispatch = useDispatch();
    const profile: IUserProfile = useSelector((store: IStore) => store.userProfile);

    useEffect(() => {
        getPetsData(profile.pets, dispatch);
    }, [profile.pets, dispatch]);

    const pets = useSelector((store: IStore) => store.pets.pets);

    return (
        <ul>
            {pets && map(pets, (pet) => {
                return (
                  <li key={pet.id}>
                      <p style={{marginRight: "5px", display: "inline-block"}}>{pet.name}</p>
                      <p style={{marginRight: "5px", display: "inline-block"}}>{pet.age}</p>
                      <p style={{marginRight: "5px", display: "inline-block"}}>{pet.breed}</p>
                      <p style={{marginRight: "5px", display: "inline-block"}}>{pet.sex}</p>
                  </li>
                );
            })}
        </ul>
    )
});
