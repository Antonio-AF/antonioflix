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
        videoTitle= 'Início de Uma Jornada a Programação'//{dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}       
        videoDescription={""}
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