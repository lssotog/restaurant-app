import classes from "./Header.module.css";
import mainHeaderImage from "../../assets/headerBanner.jpg";
import { HeaderCartButton } from "./HeaderCartButton";
export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Restaurant App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainHeaderImage} alt="A table full  of amazing food" />
      </div>
    </>
  );
};
