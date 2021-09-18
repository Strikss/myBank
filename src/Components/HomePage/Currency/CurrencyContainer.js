import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Currency from "./Currency";



class CurrencyContainer extends React.Component{
    
    render(){
        return <Currency {...this.props}/>
        
    }
}
let mapStateToProps =(state)=>{
    return {
        accounts:state.currencyPage.accounts,
    }
}

export default connect(mapStateToProps,)(Currency)