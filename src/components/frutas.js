import React, {Fragment} from "react"
import "./frutas.css"
import Laranja from "./frutas-arquivos/laranja"
import Limao from "./frutas-arquivos/limao"
import Maca from "./frutas-arquivos/maca"
import Manga from "./frutas-arquivos/manga"
import Uva from "./frutas-arquivos/uva"
import Goiaba from "./frutas-arquivos/goiaba"
import Acerola from "./frutas-arquivos/acerola"
import Pitanga from "./frutas-arquivos/pitanga"
import Banana from "./frutas-arquivos/banana"
import Pera from "./frutas-arquivos/pera"

function FrutasSection(){
  return (
    <Fragment>
      <section id="frutas" className="sessao-frutas">
      <Laranja/>
      <Limao/>
      <Maca/>
      <Manga/>
      <Uva/>
      <Acerola/>
      <Banana/>
      <Goiaba/>
      <Pitanga/>
      <Pera/>
      </section>
    </Fragment>
  )
  
}


export default FrutasSection