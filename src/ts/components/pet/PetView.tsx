import * as React from "react";
import {useParams} from "react-router";
import {getPetData} from "../redux/actions/getPetData";
import {IUserProfile} from "../redux/reducers/userReducer";
import {useSelector} from "react-redux";
import {IStore} from "../redux/reducers/mainReducer";

interface IProps {}

export const PetView = (props: IProps) => {
    const {id} = useParams();
    const profile: IUserProfile = useSelector((store: IStore) => store.userProfile);


    if (id) {
        // getPetsData(profile.pets);
        console.log(getPetData(id));
    }

    return (
        <h3>
            {id}
        </h3>
    )
};
