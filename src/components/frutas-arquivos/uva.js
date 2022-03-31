import React , {Fragment} from 'react';
import Imguva from '../img/UVA.jpg'

function FrutaUva(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={Imguva}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Uva</h1>
        <ul>
          <li>Prevenção de problemas cardíacos;</li>
          <li>Melhora da saúde da visão;</li>
          <li>Controle da pressão arterial;</li>
          <li>Equilíbrio da glicose no sangue;</li>
          <li>Aumento da saúde do sistema digestório.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaUva