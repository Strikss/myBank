const SETCURRENCY ="SETCURRENCY"   

let initialState ={
    accounts:[{title:"Euro (EUR)",currency:"eur",balance:133.2,id:1,symbol:"€"},
    {title:"Britis Sterling (GBP)",currency:"gbp",balance:10,id:2,symbol:"£"},
    {title:"US Dollar (USD)",currency:"usd",balance:10234.2,id:3,symbol:"$"},
    {title:"South Korea Won (KRW)",currency:"krw",balance:0,id:4,symbol:"₩"}],
    setCurrency:false
}
    
  
const CurrencyReducer=(state=initialState,action)=>{
    switch (action.type){
        case SETCURRENCY:
            {
                return{
                    ...state,
                    setCurrency:action.set
                }
            }
        default: {
            return state;
        }
    }
}










export let setCurrencyAC=(set)=>({type:SETCURRENCY,set});
export default CurrencyReducer;