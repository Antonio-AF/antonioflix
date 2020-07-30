import React from 'react';
import Menu from '../../componentes/Menu'
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import Footer from '../../componentes/Footer';


function Home() {
  return (
    <div style={{backgroundColor: '#141414'}} >
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-End? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores.Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}     
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}     
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}     
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}     
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}     
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}     
      />

      <Footer
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}     
      />
         
    </div>
  );
}

export default Home;