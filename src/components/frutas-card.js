import React,{Fragment} from "react";
import Style from './frutas.module.css'

export default function FrutasCard(props){
  return (
    <Fragment>
      <div className={Style.cardFruta_wrapper}>
        <div className={Style.card_fruta}>
          <h1 className={Style.title_fruta}>
            {props.nameFruta}
          </h1>
          
          <div className={Style.lista_fruta}>
            <ul>
              <li>{props.beneficio1}</li>
              <li>{props.beneficio2}</li>
              <li>{props.beneficio3}</li>
              <li>{props.beneficio4}</li>
              <li>{props.beneficio5}</li>
            </ul>
          </div>
         
        </div>

          <div className={Style.card_Img}>
              <img src={props.img} alt="Imagem fruta"></img>
          </div>

      </div>
    </Fragment>
  );
}