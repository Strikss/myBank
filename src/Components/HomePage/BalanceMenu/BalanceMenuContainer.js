import React from "react";
import { connect } from "react-redux";
import BalanceMenu from "./BalanceMenu";

class BalanceMenuContainer extends React.Component {
  render() {
    return (
      <BalanceMenu {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    accounts: state.currencyPage.accounts,
  };
};

export default connect(mapStateToProps,)(BalanceMenu);
