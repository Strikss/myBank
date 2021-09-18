import React from "react";
import { connect } from "react-redux";
import BalanceMenu from "./BalanceMenu";
class BalanceMenuContainer extends React.Component {
  render() {
    return (
      <BalanceMenu
        {...this.props}
        balance={this.props.balance}
        symbol={this.props.symbol}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    accounts: state.currencyPage.accounts,
    balance: state.currencyPage.balance,
    symbol: state.currencyPage.symbol,
  };
};

export default connect(mapStateToProps)(BalanceMenu);
