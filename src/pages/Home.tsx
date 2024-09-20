import { RepoList } from '../components/RepoList';

import 'locomotive-scroll/src/locomotive-scroll.scss';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div>
      <Header />
      <RepoList />
      <Footer />
    </div>
  );
}
