import React, { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { todoContext } from "../store/todoStore";

function WelcomeMessage() {
  const items = useContext(todoContext);
  return (
    <>
      {items.length === 0 && <p className={styles.message}>Enjoy your day!</p>}
    </>
  );
}

export default WelcomeMessage;
