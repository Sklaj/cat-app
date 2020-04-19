import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {IStore} from "../../mainReducer";
import {ISignInForm} from "./reducers/signInFormReducer";
import {Redirect} from "react-router-dom";
import {authSignIn} from "./actions/auth_sign_in_email";
import {setUserProfile} from "./actions/auth_set_user_profile";
import {authCreateUser} from "./actions/auth_create_user";
import {authCreateAndSetUserProfile} from "./actions/auth_create_and_set_user_profile";


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
        await authSignIn(signInForm.email, signInForm.password);
        setUserProfile(dispatch);
    };

    const handleSignUp = async (e: any) => {
        e.preventDefault();
        await authCreateUser(signInForm.email, signInForm.password);
        authCreateAndSetUserProfile(dispatch);
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

