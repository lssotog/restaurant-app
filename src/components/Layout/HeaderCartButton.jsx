import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
// import "./Button.css";

export const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>4</span>
    </button>
  );
};
