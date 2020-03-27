import React from "react";
import classes from "./styles.module.scss";
import cn from "classnames";

export const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={cn(classes.loaderCube, classes.loaderCube1)} />
      <div className={cn(classes.loaderCube, classes.loaderCube2)} />
      <div className={cn(classes.loaderCube, classes.loaderCube3)} />
      <div className={cn(classes.loaderCube, classes.loaderCube4)} />
      <div className={cn(classes.loaderCube, classes.loaderCube5)} />
      <div className={cn(classes.loaderCube, classes.loaderCube6)} />
      <div className={cn(classes.loaderCube, classes.loaderCube7)} />
      <div className={cn(classes.loaderCube, classes.loaderCube8)} />
      <div className={cn(classes.loaderCube, classes.loaderCube9)} />
    </div>
  );
};
