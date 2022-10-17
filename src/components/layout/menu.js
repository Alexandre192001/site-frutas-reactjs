import React, {Fragment} from 'react';
import Style from "./menu.module.css";

export default function Menu(){
  return(
    <Fragment>
      <nav className={Style.menu_nav}>
        <h1 className={Style.title_menu}>FrutBen</h1>
        <img className={Style.img_menu} src="https://i.pinimg.com/originals/d7/0c/b0/d70cb0785a19af9b6e488bcb1ca6fd9f.png" alt="logo-menu"></img>
      </nav>
    </Fragment>
  );

}