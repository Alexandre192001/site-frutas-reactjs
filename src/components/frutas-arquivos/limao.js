import React , {Fragment} from 'react';
import ImgLimao from '../img/limao.jpg'

function FrutaLimao(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgLimao}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Limão</h1>
        <ul>
          <li>Melhora a digestão;</li>
          <li>Ajuda a prevenir derrames;</li>
          <li>Aumenta a absorção do ferro;</li>
          <li>Aumenta a imunidade;</li>
          <li>Diminui sintomas de doenças respiratórias.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaLimao