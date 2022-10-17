import React, {Fragment} from 'react'
import Style from './frutas.module.css';
import FrutaInfo from './frutas-card';

import FinallySection from './finallyFruta'

export default function Frutas(){
  return (
    <Fragment>
      <section className={Style.sessao_frutas}>
        <FrutaInfo
        nameFruta = 'Banana'
        beneficio1 = "Previne doenças cardiovasculares;"
        beneficio2 = "Ajuda nas funções cerebrais;"
        beneficio3 = "Auxilia o bom humor;"
        beneficio4 = "Melhora o sono;"
        beneficio5 = "Traz energia para o corpo e reduz cãibras."
        img = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/800px-Banana.png"
        />

        <FrutaInfo
        nameFruta = 'Laranja'
        beneficio1 = "Reduz Risco de AVC;"
        beneficio2 = "Pedras nos rins;"
        beneficio3 = "Diminui o colesterol;"
        beneficio4 = "Evita Câncer;"
        beneficio5 = "Melhora a memória."
        img = "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Imagem-Laranja-PNG.png"
        />

        <FrutaInfo
        nameFruta = 'Limão'
        beneficio1 = "Melhora a digestão;"
        beneficio2 = "Ajuda a prevenir derrames;"
        beneficio3 = "Aumenta a absorção do ferro;"
        beneficio4 = "Aumenta a imunidade;"
        beneficio5 = "Diminui sintomas de doenças respiratórias."
        img = "https://mercadoterra.s3.amazonaws.com/web/media/2020/04/limao-thaiti.png"
        />

        <FrutaInfo
        nameFruta = 'Maçã'
        beneficio1 = "É boa para o coração;"
        beneficio2 = "Diminui o risco de diabetes;"
        beneficio3 = "Afasta a prisão de ventre;"
        beneficio4 = "Combate a asma;"
        beneficio5 = "Fortalece o sistema imunológico."
        img = "https://ibassets.com.br/ib.item.image.big/b-f7451597952f4232bd9dab3f01e31726.png"
        />

        <FrutaInfo
        nameFruta = 'Manga'
        beneficio1 = "Combate a gastrite;"
        beneficio2 = "Ajuda a controlar a glicemia;"
        beneficio3 = "Tem ação anti inflamatória;"
        beneficio4 = "Tem ação antioxidante;"
        beneficio5 = "Combate o câncer."
        img = "https://superprix.vteximg.com.br/arquivos/ids/175183-600-600/Manga-Tommy--1-unidade-aprox.-450g-.png?v=636294182209630000"
        />

      <FinallySection/>
        
      </section>
    </Fragment>
  );
}