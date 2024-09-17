import { useEffect, useRef } from 'react';
import { RepoList } from '../components/RepoList';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import { Header } from '../components/Header';

export function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Inicializar Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.body,
      smooth: true,
      multiplier: 0.5, // Controla a velocidade do scroll
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return (
    <div data-scroll-container ref={scrollRef}>
      <Header />
      <RepoList />
    </div>
  );
}
