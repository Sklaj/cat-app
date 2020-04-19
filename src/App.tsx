import React, {useEffect} from 'react';
import './css/App.scss';
import {useDispatch, useSelector} from "react-redux";
import {LoginView} from "./ts/auth/LoginView";
import {IStore} from "./mainReducer";
import {IUserProfile} from "./ts/auth/reducers/userReducer";
import {Redirect, Route, Switch} from "react-router-dom";
import {UserDashboard} from "./ts/user_dashboard/UserDashboard";
import {AddPetView} from "./ts/pet/AddPetView";
import {PetView} from "./ts/pet/PetView";
import {auth, db} from "./firebase";


export const App = () => {
    //Store data
    const profile: IUserProfile = useSelector((store: IStore) => store.userProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        const setUser = (user: any) => {
            if (user) {
                db.collection("users").doc(user.uid).get()
                    .then(user => {
                        if (user) {
                            dispatch({
                                type: "SET_PROFILE",
                                profile: {
                                    ...user.data(),
                                    isAuthenticated: true
                                }
                            })
                        }
                    });
            }
        };
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return () => unsubscribe();
    }, [dispatch]);

    //Render
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
                                        profile={profile}
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
