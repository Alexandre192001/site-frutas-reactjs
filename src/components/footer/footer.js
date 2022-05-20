import React, {Fragment} from 'react';
import "./footer.css"


function FooterPage(){
  return (
    <Fragment>
      <footer className="footer-page">
      <p>
      Copyright ©: 2022, Alexandre Cavalcante - Todos os direito reservados
    </p>
    <div class="icones-footer-contatos">
      <div class="element-footer-ico">
       <p>Contato - (82) 9 9416-5918</p>
      </div>
      <div class="element-footer-ico">
    
      <p>E-mail - alexandrepj13@gmail.com</p>
      </div>
      
    </div>
    <a href="https://frontend-alexandrejr.netlify.app/">Voltar</a>
      </footer>
    </Fragment> 
  )
}

export default FooterPage;