import { useContext, useEffect } from 'react';
import myContext from '../context/context';
import '../styles/App.css';
import styled from 'styled-components';
import { Description } from './Description';

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const MainCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 4px solid #1ab932;
  width: 100vw;
  height: 45vh;
  position: relative;
  overflow: hidden;
`;

const InternalCard = styled.p`
  font-size: 1.3rem;
  width: 20vw;
  height: 5vh;
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px 100px;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  //border: 1px solid #ffffff;
  overflow: hidden;
`;

const TitleInCard = styled.span`
  display: inline-block;
  animation: move-text 15s linear infinite;
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
`;

const MainTitle = styled.h1`
  font-size: 7rem;
  letter-spacing: -0.6rem;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
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
          <MainTitle>
            {repo.name} {repo.name} {repo.name}
          </MainTitle>
        </MainCard>
      ))}
      <Description />
      {repo.slice(3, 6).map((repo) => (
        <MainCard key={repo.id}>
          <InternalCard>
            <TitleInCard>
              {repo.description} {repo.description}
            </TitleInCard>
          </InternalCard>
          <MainTitle>
            {repo.name} {repo.name} {repo.name}
          </MainTitle>
        </MainCard>
      ))}
    </Container>
  );
}
