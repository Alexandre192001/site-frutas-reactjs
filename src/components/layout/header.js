import React, {Fragment} from 'react';
import Style from "./header.module.css";
import ImgHeader from '../../img/img-site-frutas.jpg'


export default function Header(){
  return(
    <Fragment>
      <header className={Style.sessao_header}>
        <div className={Style.container_wrapper}>

          <div className={Style.container_description}>
            <h1 className={Style.title_header}>
              Frutas e seus Benefícios
            </h1>
            <p className={Style.paragrapho_header}>
            Veja aqui alguns dos benefícios de algumas frutas da nossa linda natureza. ♥
            </p>

            <a href="#main" className={Style.btn_header}>Saiba mais</a>
          </div>

          <div className={Style.container_img}>
            <img src={ImgHeader} alt="img-header"></img>
          </div>
        </div>
      </header>
    </Fragment>
  );
}