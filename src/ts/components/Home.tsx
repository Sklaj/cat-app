import * as React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import {LoginView} from "./LoginView";
import {AddPetView} from "./AddPetView";
import { connect } from "react-redux";
import {ICount} from "../redux/mainReducer";
import {PetView} from "./PetView";

interface IStateProps {
    count: number;
}

interface IProps extends IStateProps {}

const HomeC = (props: IProps) => {

    console.log(props.count);

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


// export const Home = connect<IStateProps>(mapStateToProps)(HomeC);
// export const Home = connect()(HomeC)
// export const Home = HomeC;

// connect must be fixed


const mapStateToProps = (state: ICount) => ({
  count: state.count
});

export const Home = connect(mapStateToProps, {})(HomeC);
