import { useEffect, useState } from 'react';
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

const Email = styled.a`
  width: 356px;
  height: 35px;
  font-size: 26px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  text-decoration: none;
  color: #a9a6a6;
  background: linear-gradient(to top, #212121 50%, #ffffffc2 50%);
  background-size: 100% 200%;
  background-position: 0 100%;
  transition: background-position 0.2s ease-in-out;

  &:hover {
    background-position: 0 0;
    color: #000000;
    transition: 0.2s ease-in-out;
  }
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
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Sao_Paulo', // Define o fuso horário
        timeZoneName: 'short', // Exibe o nome do fuso horário
      });
      setTime(formattedTime);
    };

    updateTime(); // Atualiza a hora inicial
    const interval = setInterval(updateTime, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  });

  return (
    <>
      <Container>
        <Email href="mailto:ghrduarte@hotmail.com?subject=Contato&body=Olá, Gustavo!">
          ghrduarte@hotmail.com
        </Email>
      </Container>
      <ContainerFooter>
        <p>{time ? `${time} - Horário de Brasília` : 'Carregando hora...'}</p>
        <p>Desenvolvido por Henrique Duarte ®</p>
      </ContainerFooter>
    </>
  );
}
