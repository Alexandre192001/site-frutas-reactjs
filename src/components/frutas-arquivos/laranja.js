import React , {Fragment} from 'react';
import ImgLaranja from '../img/laranja.jpg'

function FrutaLaranja(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgLaranja}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Laranja</h1>
        <ul>
          <li>Reduz Risco de AVC;</li>
          <li>Pedras nos rins;</li>
          <li>Diminui o colesterol;</li>
          <li>Evita Câncer;</li>
          <li>Melhora a memória.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaLaranja