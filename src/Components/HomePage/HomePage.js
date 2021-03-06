import CurrencyContainer from "./Currency/CurrencyContainer";
import s from "./HomePage.module.css";
import BalanceMenuContainer from "./BalanceMenu/BalanceMenuContainer";
import { Route } from "react-router";
const HomePage = (props) => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.item}>
        <CurrencyContainer />
      </div>
      <div className={s.item}>
        <Route
          path={"/home/balance/" + props.accounts.setCurrency}
          render={() => (
            <BalanceMenuContainer/>
          )}
        />
      </div>
    </div>
  );
};
export default HomePage;
