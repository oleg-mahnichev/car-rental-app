import * as Styled from './HomePage.styled';

const HomePage = () => {
  return (
    <Styled.HeroContainer>
      {/* <HeroImage src="/public/home_photo.jpg" alt="HERO" /> */}
      <Styled.HeroText>
        <Styled.HeroTitle>
          Car rental in central and eastern Europe
        </Styled.HeroTitle>
        <Styled.HeroDescription>Details...</Styled.HeroDescription>
      </Styled.HeroText>
    </Styled.HeroContainer>
  );
};

export default HomePage;
