import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

type SmoothScrollProps = {
  children: React.ReactNode;
};

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.5,
        smartphone: { smooth: true },
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  return (
    <div ref={scrollRef} id="main-container" data-scroll-container>
      {children}
    </div>
  );
};

export default SmoothScroll;
