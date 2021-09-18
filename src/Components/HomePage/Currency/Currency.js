import Button from "../../curencyButton/Button";
import s from "./Currency.module.css";
import addBank from "../../../ImgFolder/addCard.png";
import getRevenue from "../../../ImgFolder/getRevenue.png";
import BalanceMenuContainer from "../BalanceMenu/BalanceMenuContainer";

const Currency = (props) => {
  let buttonElement = props.accounts.map((p) => {
    return <Button title={p.title} balance={p.balance} symbol={p.symbol} id={p.id} />;
  });
  return (
    <div className={s.currencyWrapper}>
      <div className={s.top}>
        <h3>Your accounts</h3>
        <div>
          {buttonElement}
          </div>
      </div>
      <div className={s.bottom}>
        <div className={s.bottomWrapper}>
          <div className={s.item}>
            <span>
              <img src={addBank} width="35px" height="35px" />
            </span>
            <div className={s.itemContainer}>
              <span>Request a Card</span>
              <span className={s.symbolContainer}>
                <span>&gt;</span>
              </span>
            </div>
            <p>Get a debit card for free</p>
          </div>

          <div className={s.item}>
            <span>
              <img src={getRevenue} width="35px" height="35px" />
            </span>
            <div className={s.itemContainer}>
              <span>Earn £ 25 for free</span>
              <span className={s.symbolContainer}>
                <span>&gt;</span>
              </span>
            </div>
            <p>Apply for pension</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Currency;
