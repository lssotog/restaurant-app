import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlays");

const ModalOverlay = ({ children }) => {
  return (
    <>
      <div className={classes.modal}>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};

export const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};
