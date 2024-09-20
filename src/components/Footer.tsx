import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 4px solid orange;
  color: #a9a6a6;
`;

const ContainerFooter = styled.footer`
  display: flex;
  width: 100vw;
  height: 10vh;
  justify-content: center;
  align-items: center;
  //border: 4px solid pink;
  justify-content: space-around;
  color: #a9a6a6;
`;

export function Footer() {
  return (
    <>
      <Container>
        <h1>email@email.com</h1>
      </Container>
      <ContainerFooter>
        <p>local e hora</p>
        <p>redes sociais</p>
        <p>Desenvolvido por Henrique</p>
      </ContainerFooter>
    </>
  );
}
