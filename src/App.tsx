import { Home } from './pages/Home';
import LocomotiveScroll from 'locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css'; // Importa o CSS da biblioteca
import { useEffect, useRef } from 'react';

function App() {
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
  });

  return (
    <div data-scroll-container ref={scrollRef}>
      <Home />
    </div>
  );
}

export default App;
