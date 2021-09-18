import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import logo from "../../ImgFolder/Logo.png";
import home from "../../ImgFolder/home.png";
import moneyPig from "../../ImgFolder/moneyPig.png";
import sendMoney from "../../ImgFolder/sendMoney.png";
import account from "../../ImgFolder/accounts.png";
const NavBar = () => {
  return (
    <nav>
      <div className={s.item}>
        <img className={s.logo} src={logo} width="50px" height="50px" />
      </div>
      <div className={s.item}>
        <NavLink to="/home/balance" activeClassName={s.activeLink}>
          <span>
            <img src={home} width="25px" height="25px" />
          </span>
          Home
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/sendmoney" activeClassName={s.activeLink}>
          <span>
            <img src={sendMoney} width="25px" height="25px" />
          </span>
          Send Money
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/topup" activeClassName={s.activeLink}>
          <span>
            <img src={moneyPig} width="25px" height="25px" />
          </span>
          Top Up
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/accounts" activeClassName={s.activeLink}>
          <span>
            <img src={account} width="25px" height="25px" />
          </span>
          Accounts
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
