import React from "react";
import { connect } from "react-redux";
import HomePage from "./HomePage";

class HomePageContainer extends React.Component {
  render() {
    return (
      <HomePage {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    accounts: state.currencyPage,
  };
};

export default connect(mapStateToProps,{})(HomePage);
