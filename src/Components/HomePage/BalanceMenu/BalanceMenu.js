import topUp from "../../../ImgFolder/moneyBoxRed.png";
import s from "./BalanceMenu.module.css";
import sendMoneyImg from "../../../ImgFolder/sendMoneyRed.png";
import check from "../../../ImgFolder/checkGrey.png";
import coins from "../../../ImgFolder/coins.png";
import moneyBox from "../../../ImgFolder/moneyBoxGrey.png";
import { NavLink } from "react-router-dom";
const BalanceMenu = (props) => {
  return (
    <div className={s.balanceWrapper}>
      <div className={s.header}>Balance</div>
      <div className={s.balanceContainer}>
        <div className={s.balance}>
          {props.symbol + props.balance}
        </div>
        <div className={s.topUpWrapper}>
          <div>
            <img src={topUp} width="25px" height="25px" /> Top Up
          </div>
        </div>
      </div>
      <div className={s.header}>Quick Transaction</div>
      <div>
          <div className={s.sendMoneyWrapper}>
            <NavLink to="/sendmoney">
          <div className={s.sendMoney}>
            <div>
              <img src={sendMoneyImg} />
            </div>
            Send Money
          </div>
           </NavLink>
          </div>
      </div>

      <div className={s.accountWrapper}>
        <div className={s.sectionWrapper}>
          <div className={s.headerBox}>
            <span>
              <img className={s.img} src={check} />
            </span>
            Account Type:
          </div>
          <div className={s.personalWrapper}>
            <div className={s.personal}>Personal</div>
          </div>
        </div>
        <div className={s.sectionWrapperTwo}>
          <div className={s.headerBox}>
            <span>
              <img className={s.img} src={coins} />
            </span>
            Currency
          </div>
          <div className={s.personalWrapper}>
            <div className={s.personal}>
              Euro <span className={s.bold}>EUR</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.accountWrapper}>
        <div className={s.sectionWrapper}>
          <div className={s.headerBox}>
            <span>
              <img className={s.img} src={moneyBox} />
            </span>
            Passive Saving
          </div>
          <div className={s.personalWrapper}>
            <div className={s.personal}>
              Enabled<span className={s.bold}> 20%</span>
            </div>
          </div>
        </div>
        <div className={s.sectionWrapperTwo}>
          <div className={s.headerBox}>Share Account</div>
          <div className={s.personalWrapper}>
            <div className={s.personal}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BalanceMenu;
