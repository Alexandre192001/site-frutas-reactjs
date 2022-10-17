import React, {Fragment} from 'react'
import Style from './finallySection.module.css'
import ImgFinally from '../img/img-header.png'

export default function FinallySection(){
  return (
    <Fragment>
      <section className={Style.sessao_finally}>
        <img src = {ImgFinally} alt="img-finally"></img>

        <div className={Style.descriptionFinally}>
          <h1 className={Style.title_finally}>Faça valer cara minuto. Aproveite seu dia !</h1>
        </div>
      </section>
    </Fragment>
  );
}
       