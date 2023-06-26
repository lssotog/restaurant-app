import classes from "./CartItem.module.css";

export const CartItem = ({ name, price, amount, onRemove, onAdd }) => {
  const priceDestructured = `$${price.toFixed(2)}`;
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceDestructured}</span>
          <span className={classes.amount}>{amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>-</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};
