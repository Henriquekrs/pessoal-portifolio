import styled from 'styled-components';

const BlockTitle = styled.div`
  width: 100vw;
  height: 100vh;
  border: 5px solid #d45e10;
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FirstBlock = styled.div`
  display: flex;
  height: 50%;
  width: 95%;
  border: 1px solid red;
  align-items: center;
  top: 75px;
  position: relative;
`;

const H1 = styled.h1`
  font-size: 15rem;
  width: 32vw;
  font-weight: 700;
  color: #a9a6a6;
  text-transform: uppercase;
  transform: scaleY(1.2);
  letter-spacing: -1.9rem;
  left: 50px;
  position: relative;
`;

const H2 = styled.h1`
  font-size: 15rem;
  font-weight: 700;
  color: #a9a6a6;
  text-transform: uppercase;
  letter-spacing: -1.9rem;
  text-indent: -25px;
`;

const SecondBlock = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  width: 95%;
  border: 1px solid red;

  & h1 {
    font-size: 16rem;
    font-weight: 700;
    color: #a9a6a6;
    text-transform: uppercase;

    letter-spacing: -1.9rem;
  }
`;

const Hyphen = styled.div`
  width: 120px;
  border: 5px solid #f9f9f9;
  height: 25px;
  justify-self: center;
  background-color: #a9a6a6;
  transition: width 0.3s ease; /* Suaviza a transição */
`;

export function Header() {
  return (
    <BlockTitle data-scroll-container>
      <FirstBlock>
        <H1
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="5"
        >
          Full
        </H1>
        <Hyphen />
        <H2
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-5"
        >
          Stack
        </H2>
      </FirstBlock>
      <SecondBlock>
        <h1>Developer</h1>
      </SecondBlock>
    </BlockTitle>
  );
}
