import React, {useEffect} from 'react';
import './css/App.scss';
import {useDispatch, useSelector} from "react-redux";
import {LoginView} from "./ts/auth/LoginView";
import {IStore} from "./mainReducer";
import {IUserProfile} from "./ts/auth/reducers/userReducer";
import {Redirect, Route, Switch} from "react-router-dom";
import {UserDashboard} from "./ts/user_dashboard/UserDashboard";
import {AddPetView} from "./ts/pets/AddPetView";
import {PetView} from "./ts/pets/PetView";
import {auth, db} from "./firebase";
import {PetListView} from "./ts/pets/PetListView";
import {FamilyView} from "./ts/family/FamilyView";
import {RemindsView} from "./ts/reminds/RemindsView";


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
                <Switch>
                    <Route path="/login">
                        <LoginView/>
                    </Route>

                    {profile.isAuthenticated? (
                        <>
                            <Route exact path="/">
                                <UserDashboard profile={profile}/>
                            </Route>

                            <Route exact path="/reminds">
                                <RemindsView/>
                            </Route>

                            <Route exact path="/pets">
                                <PetListView profilePets={profile.pets}/>
                            </Route>

                            <Route exact path="/pets/add-pet">
                                <AddPetView/>
                            </Route>

                            <Route exact path="/pets/:petId">
                                <PetView/>
                            </Route>

                            <Route exact path="/family">
                                <FamilyView/>
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
