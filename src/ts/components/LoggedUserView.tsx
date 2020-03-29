import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {AddPetView} from "./AddPetView";
import {PetView} from "./PetView";
import {IStore} from "../redux/mainReducer";
import {connect} from "react-redux";
import {IUserProfile} from "../redux/userReducer";
import {UserDashboard} from "./UserDashboard";


interface IStateProps {
    profile: IUserProfile
}

interface IProps extends IStateProps {}

const LoggedUserViewC = (props: IProps) => {
    return (
        <div className="logged-user">
            <Switch>
                <Route exact path="/">
                    {(props.profile.email && props.profile.id) && (
                        <UserDashboard
                            email={props.profile.email}
                            id={props.profile.id}
                        />
                    )}
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