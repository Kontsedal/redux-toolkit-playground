import React from "react";
import s from "./styles.module.scss";
import cn from "classnames";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={cn(s.loaderCube, s.loaderCube1)} />
      <div className={cn(s.loaderCube, s.loaderCube2)} />
      <div className={cn(s.loaderCube, s.loaderCube3)} />
      <div className={cn(s.loaderCube, s.loaderCube4)} />
      <div className={cn(s.loaderCube, s.loaderCube5)} />
      <div className={cn(s.loaderCube, s.loaderCube6)} />
      <div className={cn(s.loaderCube, s.loaderCube7)} />
      <div className={cn(s.loaderCube, s.loaderCube8)} />
      <div className={cn(s.loaderCube, s.loaderCube9)} />
    </div>
  );
};
