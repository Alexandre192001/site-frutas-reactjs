import React , {Fragment} from 'react';
import ImgPitanga from '../img/Pitanga.jpg'

function FrutaPitanga(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgPitanga}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Pitanga</h1>
        <ul>
          <li>Protege contra doenças cardiovasculares;</li>
          <li>Combate a artrite e a gota;</li>
          <li>Melhora a qualidade da pele;</li>
          <li>Combate problemas respiratórios.;</li>
          <li>Ajuda a emagrecer.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaPitanga