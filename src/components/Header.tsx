import styled from 'styled-components';

const BlockTitle = styled.div`
  width: 100vw;
  height: 100vh;
  //border: 5px solid #d45e10;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FirstBlock = styled.div`
  display: flex;
  height: 40%;
  width: 95%;
  //border: 1px solid red;
  align-items: center;
  justify-content: flex-start;
`;

const H1 = styled.h1`
  font-size: 17rem;
  width: 37vw;
  font-weight: 700;
  color: #a9a6a6;
  text-transform: uppercase;
  letter-spacing: -2rem;
  position: relative;
`;

const H2 = styled.h1`
  font-size: 17rem;
  font-weight: 700;
  color: #a9a6a6;
  text-transform: uppercase;
  letter-spacing: -1.9rem;
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
`;

const Pitch = styled.p`
  position: absolute;
  right: 0;
  margin-right: 25px;
  width: 20vw;
  color: #a9a6a6;
  text-align: justify;
  font-size: 1rem;
`;

const Hyphen = styled.div`
  width: 120px;
  //border: 5px solid #f9f9f9;
  height: 25px;
  justify-self: center;
  background-color: #a9a6a6;
  margin-right: 14px;
`;

const HeaderInformation = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  height: 10%;
  gap: 13vw;
`;

const MyName = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #a9a6a6;
`;

const Job = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #a9a6a6;
`;

const Contact = styled.h1`
  font-size: 1.2rem;
  position: absolute;
  right: 20px;
  text-transform: uppercase;
  //border: 1px solid wheat;
  //border-radius: 20px;
  padding: 5px 10px;
  color: #a9a6a6;
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
        <Contact>Contato</Contact>
      </HeaderInformation>
      <FirstBlock>
        <H1>Full</H1>
        <Hyphen />
        <H2>Stack</H2>
      </FirstBlock>
      <SecondBlock>
        <h1>Developer</h1>
        <Pitch>
          Sou desenvolvedor Full-Stack com mais de um ano de experiência e 40+
          projetos, utilizando React, Node.js, Docker, MySQL e mais. Minha
          transição de motorista de caminhão para a tecnologia trouxe
          habilidades essenciais, como gerenciamento de risco e foco em prazos,
          aplicadas em soluções inovadoras e projetos colaborativos.
        </Pitch>
      </SecondBlock>
    </BlockTitle>
  );
}
