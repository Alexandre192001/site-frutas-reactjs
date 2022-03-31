import React , {Fragment} from 'react';
import ImgBanana from '../img/banana.jpg'

function FrutaBanana(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgBanana}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Banana</h1>
        <ul>
          <li>Previne doenças cardiovasculares.;</li>
          <li>Ajuda nas funções cerebrais;</li>
          <li>Auxilia o bom humor;</li>
          <li>Melhora o sono;</li>
          <li>Traz energia para o corpo e reduz cãibras.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaBanana