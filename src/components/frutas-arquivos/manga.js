import React , {Fragment} from 'react';
import ImgManga from '../img/manga.jpg'

function FrutaManga(){
  return(
    <Fragment>
    <div className="card-wrapper">

      <div className="img-wrapper">
      <img className="img-fruta" alt="Imagem não encontrada" src={ImgManga}/>
      </div>
      

      <div className="info-fruta">
        <h1 className="title-fruta">Manga</h1>
        <ul>
          <li>Combate a gastrite;</li>
          <li>Ajuda a controlar a glicemia;</li>
          <li>Tem ação anti inflamatória;</li>
          <li>Tem ação antioxidante;</li>
          <li>Combate o câncer.</li>
        </ul>
      </div>
    </div>
    
    </Fragment>
  )
}



export default FrutaManga