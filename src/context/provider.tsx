import { useState } from 'react';
import myContext from './context';
import { fetchRepos } from '../utils/api';

type MyProviderProps = {
  children: React.ReactNode;
};

export type ProviderValue = {
  value: {
    repo: RepoType[];
    fetchRepo: () => Promise<void>;
  };
};

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [repo, setRepo] = useState<RepoType[]>([]);
  console.log(repo);

  const fetchRepo = async () => {
    const result = await fetchRepos();
    setRepo(result);
  };

  const value = {
    repo,
    fetchRepo,
  };

  return <myContext.Provider value={{ value }}>{children}</myContext.Provider>;
};
