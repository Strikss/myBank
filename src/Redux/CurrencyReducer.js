const SETCURRENCY = "SETCURRENCY";
const SETBALANCE = "SETBALANCE";
let initialState = {
  accounts: [
    {
      title: "Euro (EUR)",
      currency: "eur",
      balance: 133.2,
      id: 1,
      symbol: "€",
    },
    {
      title: "Britis Sterling (GBP)",
      currency: "gbp",
      balance: 10,
      id: 2,
      symbol: "£",
    },
    {
      title: "US Dollar (USD)",
      currency: "usd",
      balance: 10234.2,
      id: 3,
      symbol: "$",
    },
    {
      title: "South Korea Won (KRW)",
      currency: "krw",
      balance: 0,
      id: 4,
      symbol: "₩",
    },
  ],
  setCurrency: 0,
  balance:0,
  symbol:"€"
};

const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCURRENCY: {
      return {
        ...state,
        setCurrency: action.set,
        balance: action.bal,
        symbol:action.sym

      };
    }
    default: {
      return state;
    }
  }
};

export let setCurrencyAC = (set,bal,sym) => ({ type: SETCURRENCY, set,bal,sym });
export default CurrencyReducer;