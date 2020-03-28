import React from 'react';
import './css/App.scss';
import {connect} from "react-redux";
import {LoggedUserView} from "./ts/components/LoggedUserView";
import {LoginView} from "./ts/components/LoginView";
import {IStore} from "./ts/redux/mainReducer";
import {IUserProfile} from "./ts/redux/userReducer";


interface IStateProps {
    profile: IUserProfile;
}

interface IProps extends IStateProps{}

export const AppC = (props: IProps) => {
    return (
        <div className="App">
            <div className="home-container">
                <div>
                    CatApp
                </div>

                {props.profile.isAuthenticated ? (
                        <LoggedUserView/>
                    ) : (
                        <LoginView/>
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state: IStore) => {
    return {
        profile: state.userProfile
    }
};

export const App = connect(mapStateToProps, {})(AppC);
