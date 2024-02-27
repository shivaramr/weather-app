import React from "react";
import { CircularProgress } from "@mui/material";
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
