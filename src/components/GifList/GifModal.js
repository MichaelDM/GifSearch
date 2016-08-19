import React from 'react';
import Modal from 'react-modal';
import gifModal from './gifModal.css';

const GifModal = ({modalIsOpen, selectedGif, onRequestClose}) => {
  if (!selectedGif){
    return <div></div>
  }
  console.log(selectedGif);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => onRequestClose()}
    >
      <div className="gif-modal">
        <img src={selectedGif.images.original.url} />
        <p><strong>Source:</strong><a href={selectedGif.source}>{selectedGif.source}</a></p>
        <p><strong>Rating:</strong>{selectedGif.rating}</p>
        <button onClick={()=> onRequestClose()}>close</button>
      </div>
    </Modal>
  )
}

export default GifModal;
