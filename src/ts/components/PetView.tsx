import * as React from "react";
import {useParams} from "react-router";


interface IProps {}

export const PetView = (props: IProps) => {
    const {id} = useParams();
    return (
        <h3>
            {id}
        </h3>
    )
};
