import React,{Fragment} from 'react';
import Style from './main.module.css'
import { AiFillCheckCircle } from "react-icons/ai";

export default function TextCard(props) {
  return (
    <Fragment>
      <div className={Style.card_wrapper}>
        <div className={Style.card}>
          <AiFillCheckCircle className={Style.icone_card}/>
          <h2 className={Style.title_card}>{props.title}</h2>
          <p className={Style.Paragraph_card}>{props.paragraph}</p>
        </div>
      </div>
    </Fragment>
  );
}