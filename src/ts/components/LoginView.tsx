import * as React from "react";
import { Link } from "react-router-dom";

interface IProps {

}

export const LoginView = (props: IProps) => {
    return (
        <>
            <div>
                CatApp
            </div>

            <form>
                <input/>
                <input/>
            </form>

            <Link to="/add-pet">
                Wyślij
            </Link>
        </>
    );
};
