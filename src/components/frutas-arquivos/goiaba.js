import React , {Fragment} from 'react';
import ImgGoiaba from '../img/goiaba.jpg'

function FrutaGoiaba(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgGoiaba}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Goiaba</h1>
        <ul>
          <li>Melhora a saúde do coração;</li>
          <li>Pode ser consumida por quem tem diabetes;</li>
          <li>Aumenta a imunidade;</li>
          <li>Retarda o envelhecimento;</li>
          <li>Melhora o funcionamento cerebral.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaGoiaba