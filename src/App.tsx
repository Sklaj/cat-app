import React, {useEffect, useState} from 'react';
import './css/App.scss';
import {useDispatch} from "react-redux";
import {auth} from "./ts/firebase/firebase";
import {LoggedUserView} from "./ts/components/LoggedUserView";
import {LoginView} from "./ts/components/LoginView";


export const App = () => {
    //Authenticated user app handling
    const [currentUser, setCurrentUser] = useState<any>(null);
    const dispatch = useDispatch();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
                console.log(user);
                dispatch({
                    type: "SET_PROFILE", profile: {
                        id: user.uid,
                        email: user.email
                    }
                });
                localStorage.setItem("currentUser", user.uid);
            } else {
                setCurrentUser(null);
                localStorage.removeItem("currentUser");
            }
        });
    }, [dispatch]);

    //render
    return (
        <div className="App">
            <div className="home-container">
                <div>
                    CatApp
                </div>

                {currentUser ? (
                        <LoggedUserView/>
                    ) : (
                        <LoginView/>
                    )
                }
            </div>
        </div>
    );
};
