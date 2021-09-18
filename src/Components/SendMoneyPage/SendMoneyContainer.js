import React from "react";
import { connect } from "react-redux";
import SendMoney from "./SendMoney";
import { setCurrencyAC } from "../../Redux/CurrencyReducer";

class SendMoneyContainer extends React.Component {
  render() {
    return (
      <SendMoney {...this.props} setCurrencyAC={this.props.setCurrencyAC} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    accounts: state.currencyPage.accounts,
    setCurrency: state.currencyPage.setCurrency,
  };
};

export default connect(mapStateToProps, { setCurrencyAC })(SendMoney);
