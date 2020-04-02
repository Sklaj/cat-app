import React from 'react';
import './css/App.scss';
import {useSelector} from "react-redux";
import {LoginView} from "./ts/components/auth/LoginView";
import {IStore} from "./ts/redux/mainReducer";
import {IUserProfile} from "./ts/redux/userReducer";
import {Redirect, Route, Switch} from "react-router-dom";
import {UserDashboard} from "./ts/components/UserDashboard";
import {AddPetView} from "./ts/components/AddPetView";
import {PetView} from "./ts/components/PetView";


export const App = () => {
    //Store data
    const profile: IUserProfile = useSelector((store: IStore) => store.userProfile);

    return (
        <div className="App">
            <div className="home-container">
                <div>
                    CatApp
                </div>

                <Switch>
                    <Route path="/login">
                        <LoginView/>
                    </Route>

                    {profile.isAuthenticated? (
                        <>
                            <Route exact path="/">
                                {(profile.email && profile.id) && (
                                    <UserDashboard
                                        email={profile.email}
                                        id={profile.id}
                                    />
                                )}
                            </Route>

                            <Route exact path="/add-pet">
                                <AddPetView/>
                            </Route>

                            <Route exact path="/pet/:id">
                                <PetView/>
                            </Route>
                        </>
                    ) : (
                        <Redirect to="/login"/>
                    )}
                </Switch>
            </div>
        </div>
    );
};
