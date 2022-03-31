import React , {Fragment} from 'react';
import ImgMaca from '../img/maca.jpg'

function FrutaMaca(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgMaca}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Maçã</h1>
        <ul>
          <li>É boa para o coração;</li>
          <li>Diminui o risco de diabetes;</li>
          <li>Afasta a prisão de ventre;</li>
          <li>Combate a asma;</li>
          <li>Fortalece o sistema imunológico.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaMaca