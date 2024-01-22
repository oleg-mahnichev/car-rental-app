import * as Styled from './Modal.styled';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const CarModal = ({ isOpen, onRequestClose, car }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Car Details"
      ariaHideApp={false}
    >
      <Styled.ModalContainer>
        <Styled.Image src={car.img} alt={car.make} />
        <Styled.CloseButton onClick={onRequestClose}>Close</Styled.CloseButton>
        <Styled.ModalContent>
          <h2>{`${car?.make} ${car?.model}`}</h2>
          <p>{car?.description}</p>
          <Styled.RentalButton href="tel:+380730000000">
            Rental Car
          </Styled.RentalButton>
        </Styled.ModalContent>
      </Styled.ModalContainer>
    </Modal>
  );
};

CarModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  car: PropTypes.object,
};

export default CarModal;
