import React from "react";
import { connect } from "react-redux";
import SendMoney from "./SendMoney";

class SendMoneyContainer extends React.Component {
  render() {
    return (
      <SendMoney {...this.props} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    accounts: state.currencyPage.accounts,
    
  };
};

export default connect(mapStateToProps, )(SendMoney);
