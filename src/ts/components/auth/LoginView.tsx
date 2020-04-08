import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../redux/reducers/mainReducer";
import {ISignInForm} from "../../redux/reducers/signInFormReducer";
import {auth, db} from "../../firebase/firebase";
import {Redirect} from "react-router-dom";


export const LoginView = () => {
    //Store data
    const signInForm: ISignInForm = useSelector((store: IStore) => store.signInForm);
    const isAuthenticated: boolean = useSelector((store: IStore) => store.userProfile.isAuthenticated);

    //form change handling
    const dispatch = useDispatch();
    const updateEmail = (email: string) => dispatch({type: "UPDATE_EMAIL", email: email});
    const updatePassword = (password: string) => dispatch({type: "UPDATE_PASSWORD", password: password});

    //form submit handling
    const handleSignIn = async (e: any) => {
        e.preventDefault();
        await auth
            .signInWithEmailAndPassword(signInForm.email, signInForm.password)
            .catch((error) =>
                alert(
                    `Your email or password is incorrect, please check your data, ${error}`
                )
            );
        await auth
            .onAuthStateChanged((user) => {
                if (user) {
                    db.collection("users").doc(user.uid).get().then(user => {
                        dispatch({
                            type: "SET_PROFILE", profile: {
                                ...user.data(),
                                isAuthenticated: true
                            }
                        });
                    })
                }
            })
    };

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        await auth
            .createUserWithEmailAndPassword(signInForm.email, signInForm.password)
            .catch((error) =>
                alert(
                    `Your email or password is incorrect, please check your data, ${error}`
                )
            );
        await auth
            .onAuthStateChanged((user) => {
                if (user) {
                    dispatch({
                        type: "SET_PROFILE", profile: {
                            id: user.uid,
                            email: user.email,
                            isAuthenticated: true
                        }
                    });
                    //adding user to db
                    db.collection("users").doc(user.uid).set({
                        id: user.uid,
                        email: user.email,
                    });
                    localStorage.setItem("currentUser", user.uid);
                }
            })
    };

    //Render
    return (
        <>
            <form className="login-form">
                <label htmlFor="email-input">
                    e-mail
                </label>

                <input
                    placeholder="janusz.kowalski@mail.pl"
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    value={signInForm.email}
                    onChange={e => updateEmail(e.target.value)}
                />

                <label htmlFor="password-input">
                    hasło
                </label>

                <input
                    placeholder="********"
                    type="password"
                    name="password"
                    id="password-input"
                    required
                    value={signInForm.password}
                    onChange={e => updatePassword(e.target.value)}
                />

                <button type="submit" name="Zaloguj się" value={1} onClick={e => handleSignIn(e)}>
                    Zaloguj się
                </button>

                <button type="submit" name="Zarejestruj się" value={1} onClick={e => handleSignUp(e)}>
                    Zarejestruj się
                </button>

                {isAuthenticated && (
                    <Redirect to="/"/>
                )}
            </form>
        </>
    );
};

