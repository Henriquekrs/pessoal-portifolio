import { useContext, useEffect } from 'react';
import myContext from '../context/context';
import '../styles/App.css';

export function RepoList() {
  const { repo, fetchRepo } = useContext(myContext).value;

  useEffect(() => {
    fetchRepo();
  }, []);

  return (
    <div className="mainContainer" data-scroll-container>
      {repo.map((repo, index) => (
        <div key={repo.id} className="Container">
          <p className="moving-text">
            <span>
              {repo.description} {repo.description}
            </span>
          </p>
          <h1
            className="Title"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={index % 2 === 0 ? 2 : -2}
          >
            {repo.name} {repo.name} {repo.name}
          </h1>
        </div>
      ))}
    </div>
  );
}
