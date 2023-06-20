import { MealItemForm } from "./MealItemForm";
import classes from "./MealItem.module.css";

export const MealItem = ({ name, description, price, id }) => {
  const priceFixed = `$${price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceFixed}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};
