import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

import passwordManager from '../assets/PassWord-Manager_Image.png';
import recipeApp from '../assets/RecipeApp_Image.png';
import trybeFutebol from '../assets/TrybeFurtebol_Image.png';
import trybeWallet from '../assets/TrybeWallet_Image.png';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  //border: 4px solid blue;
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
`;

const CardImages = styled.div`
  width: 50%;
  height: 100%;
  //border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
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
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          style={{ width: '80%', height: '80%' }}
        >
          <SwiperSlide style={{ width: '500px', height: '500px' }}>
            <Image src={trybeWallet} alt="Foto 1" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '500px', height: '500px' }}>
            <Image src={trybeFutebol} alt="Foto 2" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '500px', height: '500px' }}>
            <Image src={recipeApp} alt="Foto 3" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '500px', height: '500px' }}>
            <Image src={passwordManager} alt="Foto 4" />
          </SwiperSlide>
        </Swiper>
      </CardImages>
    </Container>
  );
}
