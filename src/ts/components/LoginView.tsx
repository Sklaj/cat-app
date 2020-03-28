import * as React from "react";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import {IStore} from "../redux/mainReducer";
import {ISignInForm} from "../redux/signInFormReducer";
import {auth} from "../firebase/firebase";


interface IStateProps {
    signInForm: ISignInForm;
}

interface IProps extends IStateProps {}

export const LoginViewC = (props: IProps) => {

    //form change handling
    const dispatch = useDispatch();
    const updateEmail = (email: string) => dispatch({type: "UPDATE_EMAIL", email: email});
    const updatePassword = (password: string) => dispatch({type: "UPDATE_PASSWORD", password: password});

    //form submit handling
    const handleSignIn = (e: any) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(props.signInForm.email, props.signInForm.password)
            .catch((error) =>
                alert(
                    `Your email or password is incorrect, please check your data, ${error}`
                )
            );
    };

    const handleSignUp = (e: any) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(props.signInForm.email, props.signInForm.password)
            .catch((error) =>
                alert(
                    `Your email or password is incorrect, please check your data, ${error}`
                )
            );
    };

    //Render
    console.log(props.signInForm);
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
                    value={props.signInForm.email}
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
                    value={props.signInForm.password}
                    onChange={e => updatePassword(e.target.value)}
                />

                <button type="submit" name="Zaloguj się" value={1} onClick={e => handleSignIn(e)}>
                    Zaloguj się
                </button>

                <button type="submit" name="Zarejestruj się" value={1} onClick={e => handleSignUp(e)}>
                    Zarejestruj się
                </button>
            </form>
        </>
    );
};

const mapStateToProps = (state: IStore) => {
    return {
        signInForm: state.signInForm
    }
};

export const LoginView = connect(mapStateToProps, {})(LoginViewC);