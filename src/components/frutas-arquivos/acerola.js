import React , {Fragment} from 'react';
import ImgAcerola from '../img/acerola.jpg'

function FrutaAcerola(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgAcerola}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Acerola</h1>
        <ul>
          <li>Fortalece o sistema imunológico;</li>
          <li>Previne o envelhecimento precoce;</li>
          <li>Previne problemas gastrointestinais;</li>
          <li>É benéfica para o coração;</li>
          <li>Faz bem para a tireoide.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaAcerola