import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { RepoList } from '../components/RepoList';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import 'locomotive-scroll/dist/locomotive-scroll.css'; // Importa o CSS da biblioteca

export function Home() {
  const scrollRef = useRef(null); // Referência para o contêiner de rolagem

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Define o elemento monitorado
      smooth: true, // Ativa a rolagem suave
      multiplier: 0.5, // Velocidade de rolagem
    });

    // Cleanup para evitar problemas ao desmontar o componente
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      <Header />
      <RepoList />
      <Footer />
    </div>
  );
}
