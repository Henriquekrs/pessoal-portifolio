import styled from 'styled-components';
//import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
//import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import fotoLinkedin from '../assets/CartoonImage.webp';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: 1px solid #5f5e5e;
    height: 100vh;
    padding: 0;
  }
`;

const MyDescription = styled.h1`
  width: 50%;
  height: 100%;
  //border: 1px solid red;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a9a6a6;
  font-weight: 300;
  padding: 0px 30px 0px 30px;

  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
    font-size: 20px;
    padding: 3vh;
  }
`;

const CardImages = styled.div`
  width: 50%;
  height: 70%;
  border-left: 1px solid #5f5e5e;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 50%;
    border-left: none;
    border-top: 1px solid #5f5e5e;
  }
`;

const Image = styled.img`
  width: auto;
  height: 90%;
  border-radius: 20px;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    border-radius: 0px;
  }
`;

export function Description() {
  const startDate = new Date('2023-04-14'); // Data de início como desenvolvedor
  const [experienceTime, setExperienceTime] = useState('');

  useEffect(() => {
    const updateExperienceTime = () => {
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); // Conversão para anos
      const diffMonths = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
      ); // Meses restantes
      const diffDays = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
      ); // Dias restantes
      const diffHours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ); // Horas restantes
      const diffMinutes = Math.floor(
        (diffTime % (1000 * 60 * 60)) / (1000 * 60)
      ); // Minutos restantes
      const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000); // Segundos restantes

      const timeString = `${diffYears} ano(s), ${diffMonths} mês(es), ${diffDays} dia(s), ${diffHours} hora(s), ${diffMinutes} minuto(s), e ${diffSeconds} segundo(s)`;
      setExperienceTime(timeString);
    };

    const interval = setInterval(updateExperienceTime, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <Container>
      <MyDescription>
        Sou desenvolvedor Full-Stack a {experienceTime} de experiência,
        localizado em Brasília. Aqui, você encontrará meus principais projetos
        em andamento. Sou entusiasta e apaixonado pela área em que atuo. Gosto
        de compartilhar conhecimento, contribuir em projetos e expandir meu
        networking. Tem algum projeto em mente? Vamos colaborar? Entre em
        contato!
      </MyDescription>
      <CardImages>
        <Image src={fotoLinkedin} alt="foto de perfil" />
      </CardImages>
    </Container>
  );
}
