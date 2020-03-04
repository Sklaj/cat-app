import * as React from "react";
// import { connect } from "react-redux";

interface IStateProps {
    // state: number
}

interface IProps extends IStateProps {}

const HomeC = (props: IProps) => {
    return (
        <div>
            HomeComponent
        </div>
    );
}

// const mapStateToProps = (state: number) => state;

// export const Home = connect<IStateProps>()(HomeC);
// export const Home = connect()(HomeC)
export const Home = HomeC;

// connect must be fixed