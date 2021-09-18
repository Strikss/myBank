import React from "react";
import { connect } from "react-redux";
import { setCurrencyAC } from "../../../Redux/CurrencyReducer";
import Currency from "./Currency";

class CurrencyContainer extends React.Component {
  render() {
    return (
      <Currency
        {...this.props}
        setCurrencyAC={this.props.dispatch.setCurrencyAC}
      />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    accounts: state.currencyPage.accounts,
  };
};

export default connect(mapStateToProps, { setCurrencyAC })(Currency);
