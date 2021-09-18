import { NavLink } from "react-router-dom";
import s from "./Button.module.css";

let Button = (props) => {
  let balance = props.balance.toFixed(2);
  let path = "/home/balance/" + props.id;
  return (
    <div
      className={s.buttonLink}
      onClick={() => props.setCurrencyAC(props.id, props.balance, props.symbol)}
    >
      <NavLink to={path} activeClassName={s.activeButton}>
        <div className={s.buttonWrapper}>
          <div className={s.item}>{props.title}</div>
          <div className={s.secondItem}>
            <div>{props.symbol + balance}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
export default Button;
