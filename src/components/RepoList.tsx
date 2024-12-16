import { useContext, useEffect } from 'react';
import myContext from '../context/context';
import '../styles/App.css';
import styled from 'styled-components';
import { Description } from './Description';

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  border-top: 1px solid #ffffffcf;
  width: 90vw;
  height: 45vh;
`;

const InternalCard = styled.p`
  font-size: 1.3rem;
  width: 20vw;
  height: 5vh;
  margin-right: 50px;
  color: #ffffff;
  white-space: nowrap;
  text-transform: uppercase;
  //border: 1px solid #0dd4d1;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 50vw;
    margin-right: 0;
  }
`;

const TitleInCard = styled.span`
  display: inline-block;
  animation: move-text 15s linear infinite;

  @media (max-width: 768px) {
    animation: move-text 55s linear infinite;
  }
`;

const TitleProjects = styled.span`
  font-size: 1.3rem;
  width: 20vw;
  height: 5vh;
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px 120px;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  //border: 1px solid #ffffff;

  @media (max-width: 768px) {
    width: 80vw;
    margin: 20px 0;
  }
`;

const MainTitle = styled.h1`
  font-size: 7rem;
  letter-spacing: -0.6rem;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;

  &:hover {
    color: #f41313;
    transition: 0.3s ease-in-out;
  }
`;

export function RepoList() {
  const { repo, fetchRepo } = useContext(myContext).value;

  useEffect(() => {
    fetchRepo();
  }, []);

  return (
    <Container>
      {repo.slice(0, 3).map((repo, index) => (
        <MainCard key={repo.id}>
          {index == 0 && <TitleProjects>Projetos desenvolvidos</TitleProjects>}
          <InternalCard>
            <TitleInCard>
              {repo.description} {repo.description}
            </TitleInCard>
          </InternalCard>
          <MainTitle
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={index % 2 === 0 ? 2 : -2}
            onClick={() => window.open(repo.clone_url)}
          >
            {repo.name} {repo.name} {repo.name} {repo.name}
          </MainTitle>
        </MainCard>
      ))}
      <Description />
      {repo.slice(3, 6).map((repo, index) => (
        <MainCard key={repo.id}>
          <InternalCard>
            <TitleInCard>
              {repo.description} {repo.description}
            </TitleInCard>
          </InternalCard>
          <MainTitle
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={index % 2 === 0 ? 2 : -2}
            onClick={() => window.open(repo.clone_url)}
          >
            {repo.name} {repo.name} {repo.name} {repo.name}
          </MainTitle>
        </MainCard>
      ))}
    </Container>
  );
}
