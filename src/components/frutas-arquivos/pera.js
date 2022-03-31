import React , {Fragment} from 'react';
import ImgPera from '../img/pera.jpg'

function FrutaPera(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgPera}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Pera</h1>
        <ul>
          <li>Ajuda no funcionamento do intestino;</li>
          <li>Faz bem para o coração;</li>
          <li>Combate inflamações;</li>
          <li>Melhora o controle glicêmico;</li>
          <li>Faz bem para os ossos.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaPera