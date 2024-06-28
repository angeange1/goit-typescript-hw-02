import Modal from 'react-modal';

import { ImageModalProps } from './ImageModal.types';

const customStyles: Modal.Styles = {
overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: "none",
    background: "none",
    height: "auto",
    width: "auto",
    overflow: "visible",
  },
};

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, picture, onClose }) => {
    return (<Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
      >
        <img src={picture} />
      </Modal>)
}

export default ImageModal