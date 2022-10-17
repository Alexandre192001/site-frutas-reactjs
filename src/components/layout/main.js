import React, {Fragment} from 'react';
import Style from './main.module.css';
import MainCard from './info-main';

export default function Main(){
  return(
    <Fragment>
      <main className={Style.sessao_main} id="main">
      <h1 className={Style.title_main}>As frutas são importantes no desenvolvimento do nosso <span>corpo</span> e <span>saúde.</span></h1>
          
        <div className={Style.container_main_wrapper}>
          
          <MainCard
          title="Frutas são fontes de minerais e vitaminas essenciais para o organismo"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, est? Fugiat, deleniti eveniet."
          />
          
          <MainCard
          title="Frutas cítricas, como laranja e limão, ajudam a fortalecer a imunidade"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, est? Fugiat, deleniti eveniet."
          />
          
          <MainCard
          title="Frutas vermelhas melhoram a saúde da pele e do cabelo"
          paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, est? Fugiat, deleniti eveniet."
          />
        </div>
      </main>
    </Fragment>
  );
}