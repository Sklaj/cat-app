import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {LoginView} from "./LoginView";
import {AddPetView} from "./AddPetView";
import {connect} from "react-redux";
import {IPetState, IStore, IUserProfile} from "../redux/mainReducer";
import {PetView} from "./PetView";

interface IStateProps {
    profile: IUserProfile;
    pets: IPetState
}

interface IProps extends IStateProps {}

const HomeC = (props: IProps) => {

    console.log(props.profile);
    console.log(props.pets);

    return (
        <Router>
            <div className="home-container">
                <Switch>
                    <Route exact path="/">
                        <LoginView/>
                    </Route>

                    <Route path="/add-pet" exact>
                        <AddPetView/>
                    </Route>

                    <Route path="/pet/:id" exact>
                        <PetView/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};


const mapStateToProps = (state: IStore) => {
  return {
      profile: state.userProfile,
      pets: state.pets
  }
};

export const Home = connect(mapStateToProps, {})(HomeC);
