import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {LoginView} from "./LoginView";
import {AddPetView} from "./AddPetView";
import {connect} from "react-redux";
import {IStore} from "../redux/mainReducer";
import {PetView} from "./PetView";
import {IUserProfile} from "../redux/userReducer";
import {IPetState} from "../redux/petsReducer";
import {useEffect, useState} from "react";
import {auth} from "../firebase/firebase";

interface IStateProps {
    profile: IUserProfile;
    pets: IPetState
}

interface IProps extends IStateProps {}

const HomeC = (props: IProps) => {

    console.log(props.profile);
    console.log(props.pets);

    const [currentUser, setCurrentUser] = useState<any>(null);



    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
                console.log(user);
                localStorage.setItem("currentUser", user.uid);
            } else {
                setCurrentUser(null);
                localStorage.removeItem("currentUser");
            }
        });
    }, []);

    return (
        <Router>
            <div className="home-container">
                <div>
                    CatApp
                </div>

                {currentUser ? (
                    <div>
                        Zalogowany

                        <button onClick={() => auth.signOut()}>
                            wyloguj
                        </button>
                    </div>
                ) : (
                    <LoginView/>
                    )
                }


                <Switch>
                    <Route exact path="/">
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
