import styled from 'styled-components';

const BlockTitle = styled.div`
  width: 100vw;
  height: 100vh;
  //border: 5px solid #d45e10;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 125vh;
    padding: 0;
  }
`;

const FirstBlock = styled.div`
  display: flex;
  height: 40%;
  width: 95%;
  //border: 1px solid #70f708;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    position: relative;
    width: 95%;
    height: auto;
  }
`;

const H1 = styled.h1`
  font-size: 17rem;
  font-weight: 700;
  color: #a9a6a6;
  text-transform: uppercase;
  letter-spacing: -36px;
  position: relative;

  @media (max-width: 768px) {
    letter-spacing: -9px;
    font-size: 20vw;
  }
`;

const SecondBlock = styled.div`
  display: flex;
  flex-direction: row;
  height: 40%;
  width: 95%;
  //border: 1px solid red;
  align-items: center;

  & h1 {
    font-size: 16rem;
    font-weight: 700;
    color: #a9a6a6;
    text-transform: uppercase;
    letter-spacing: -1.9rem;
  }

  @media (max-width: 768px) {
    display: flex;
    position: relative;
    top: -40px;
    width: 95%;
    height: auto;
    align-items: start;
    flex-direction: column;

    & h1 {
      letter-spacing: -10px;
      font-size: 20vw;
    }
  }
`;

const Pitch = styled.p`
  position: absolute;
  right: 0;
  margin-right: 25px;
  width: 20vw;
  color: #a9a6a6;
  text-align: justify;
  font-size: 1rem;

  @media (max-width: 768px) {
    display: flex;
    width: 90%;
    text-align: left;
    font-size: 23px;
    position: relative;
    top: 5vh;
  }
`;

const HeaderInformation = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 10%;
  gap: 13vw;
  //border: 1px solid red;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    //border: 1px solid #001aff;
    width: 98vw;
    height: auto;
    position: absolute;
    top: 20px;
    gap: 0;
  }
`;

const MyName = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #a9a6a6;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 30%;
  }
`;

const Job = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #a9a6a6;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 30%;
  }
`;

const Contact = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 700;
  position: absolute;
  cursor: pointer;
  right: 20px;
  text-transform: uppercase;
  padding: 5px 10px;
  color: #a9a6a6;
  background: linear-gradient(to top, #212121 50%, #ffffffc2 50%);
  background-size: 100% 200%;
  background-position: 0 100%;
  transition: background-position 0.3s ease-in-out;

  &:hover {
    background-position: 0 0;
    color: #000000;
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 0;
    right: 0;
    text-align: center;
    background: none;
    position: relative;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    width: 30%;

    &:hover {
      color: #ff0000;
    }
  }
`;

export function Header() {
  return (
    <BlockTitle>
      <HeaderInformation>
        <MyName>
          Gustavo
          <br />
          Henrique
        </MyName>
        <Job>
          desenvolvedor full-stack
          <br />
          desde 2023
        </Job>
        <Contact href="https://www.linkedin.com/in/henriquekrs/">
          Contato
        </Contact>
      </HeaderInformation>
      <FirstBlock>
        <H1>Full-Stack</H1>
      </FirstBlock>
      <SecondBlock>
        <h1>Developer</h1>
        <Pitch>
          Sou desenvolvedor Full-Stack com mais de um ano de experiência e 40+
          projetos, utilizando React, Node.js, Next.js, Docker, MySQL e mais.
          Minha transição de motorista de caminhão para a tecnologia trouxe
          habilidades essenciais, como gerenciamento de risco e foco em prazos,
          aplicadas em soluções inovadoras e projetos colaborativos.
        </Pitch>
      </SecondBlock>
    </BlockTitle>
  );
}
