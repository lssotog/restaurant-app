import classes from "./Cart.module.css";

export const OrderDelivered = ({ onClose }) => {
  return (
    <>
      <section>
        <h2>Thank you so much for your order!</h2>
        <p>We really appreciate it.</p>
        <p>
          Enjoy <b> 10%</b>off your next purchase with this coupon code:
          <b>THANKYOU10</b>
        </p>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
};
