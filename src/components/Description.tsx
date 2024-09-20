import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;
  let messageExperience = '';

  if (experienceYears < 2) {
    messageExperience = `${experienceYears} ano`;
  } else {
    messageExperience = `${experienceYears} anos`;
  }

  return (
    <Container>
      <MyDescription>
        Sou desenvolvedor Full-Stack com {messageExperience} de experiência,
        localizado em Brasília. Aqui, você encontrará meus principais projetos
        em andamento. Sou entusiasta e apaixonado pela área em que atuo. Gosto
        de compartilhar conhecimento, contribuir em projetos e expandir meu
        networking. Tem algum projeto em mente? Vamos colaborar? Entre em
        contato !
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
            <Image src="src/assets/TrybeWallet_Image.png" alt="Foto 1" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '500px', height: '500px' }}>
            <Image src="src/assets/TrybeFurtebol_Image.png" alt="Foto 2" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '500px', height: '500px' }}>
            <Image src="src/assets/RecipeApp_Image.png" alt="Foto 3" />
          </SwiperSlide>
          <SwiperSlide style={{ width: '500px', height: '500px' }}>
            <Image src="src/assets/PassWord-Manager_Image.png" alt="Foto 4" />
          </SwiperSlide>
        </Swiper>
      </CardImages>
    </Container>
  );
}
