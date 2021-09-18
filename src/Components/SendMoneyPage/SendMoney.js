import SendMoneyButton from "../curencyButton/SendMoneyButton";
import s from "./SendMoney.module.css";
import sendMoneyImg from "../../ImgFolder/sendMoney.png";
import bankCard from "../../ImgFolder/bankCard.png";
let SendMoney = (props) => {
  return (
    <div className={s.wrapper}>
      <div>
        <h3 className={s.header}>
          <img className={s.bankCardImg} src={bankCard} />
          Send money From:
        </h3>
        <div>
          {props.accounts.map((p) => {
            
            return  <SendMoneyButton title={p.title} balance={p.balance} symbol={p.symbol} id={p.id} />;
          })}
        </div>
      </div>
      <div className={s.moneyWrapper}>
        <div className={s.sendMoney}>
          <span>
            <img src={sendMoneyImg} width="25px" height="25px" />
          </span>
          Send Money
        </div>
      </div>
    </div>
  );
};
export default SendMoney;
