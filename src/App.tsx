import { Home } from './pages/Home';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import SmoothScroll from './components/LocomotiveScroll';

function App() {
  return (
    <SmoothScroll>
      <div data-scroll-section>
        <Home />
      </div>
    </SmoothScroll>
  );
}

export default App;
