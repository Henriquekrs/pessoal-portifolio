import { RepoList } from '../components/RepoList';
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
