import * as React from "react";
import {auth} from "../firebase/firebase";
import {Link, Route, Switch} from "react-router-dom";
import {AddPetView} from "./AddPetView";
import {PetView} from "./PetView";
import {IStore} from "../redux/mainReducer";
import {connect} from "react-redux";
import {IUserProfile} from "../redux/userReducer";


interface IStateProps {
    profile: IUserProfile
}

interface IProps extends IStateProps {}

const LoggedUserViewC = (props: IProps) => {
    return (
        <div className="logged-user">
            <Switch>
                <Route exact path="/">
                    <div>
                        Zalogowany
                    </div>

                    <div>
                        email: {props.profile.email}
                    </div>

                    <div>
                        id: {props.profile.id}
                    </div>

                    <button onClick={() => auth.signOut()}>
                        wyloguj
                    </button>

                    <Link to="/add-pet">
                        <button>
                            Dodaj zwierzaka
                        </button>
                    </Link>
                </Route>

                <Route exact path="/add-pet">
                    <AddPetView/>
                </Route>

                <Route exact path="/pet/:id">
                    <PetView/>
                </Route>
            </Switch>
        </div>
    );
};

const mapStateToProps = (state: IStore) => {
    return {
        profile: state.userProfile
    }
};

export const LoggedUserView = connect(mapStateToProps, {})(LoggedUserViewC);