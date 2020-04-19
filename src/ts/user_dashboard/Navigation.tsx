import * as React from "react";
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">
                    Panel
                </Link>
            </li>

            <li>
                <Link to="/reminds">
                    Przypomnienia
                </Link>
            </li>

            <li>
                <Link to="/pets">
                    Pets
                </Link>
            </li>

            <li>
                <Link to="/family">
                    Family
                </Link>
            </li>
        </ul>
    );
};
