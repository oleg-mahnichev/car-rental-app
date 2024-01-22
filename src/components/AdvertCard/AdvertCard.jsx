import PropTypes from 'prop-types';
import { useState } from 'react';
import CarModal from '../Modal/Modal';
import * as Styled from './AdvertCard.styled';

const AdvertCard = ({ advert }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Styled.CardContainer>
      <Styled.Image src={advert.img} alt={advert.make} />
      <Styled.Title>
        {advert.make} {advert.model}, {advert.year}
        <span>{advert.rentalPrice}</span>
      </Styled.Title>
      <Styled.LearnMoreButton onClick={openModal}>
        Learn More
      </Styled.LearnMoreButton>
      <CarModal isOpen={isModalOpen} onRequestClose={closeModal} car={advert} />
    </Styled.CardContainer>
  );
};

AdvertCard.propTypes = {
  advert: PropTypes.object.isRequired,
};

export default AdvertCard;
