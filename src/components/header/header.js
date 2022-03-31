import React, {Fragment} from "react";
import ImagemHeader from "../img/header.jpg";
import "./header.css"
function HeaderPage(){
  return (
    <Fragment>
      <header className="cabecalho-page">
        <img alt="imagem não encontrada"src={ImagemHeader}/>
        <div className="descri-header">
            <h1 className="title-header">Informações sobre Frutas para a Saúde:</h1>
            <p>Frutas e seus Benefícios</p>
            <a href="#frutas" className="btn-header">Saiba Mais</a>
        </div>
      </header>
    </Fragment>
  )
}

export default HeaderPage