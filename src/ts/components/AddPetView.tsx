import * as React from "react";
import {Link} from "react-router-dom";

interface IProps {}

export const AddPetView = (props: IProps) => {
    return (
        <div>
            Dodaj zwierzaka

            <Link to={`pet/1`}>
                Pies
            </Link>

            <Link to={`pet/098098`}>
                Kot
            </Link>
        </div>
    );
};
