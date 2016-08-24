import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

const INITAL_STATE = {
  selectedGif: null,
  modalIsOpen: false,
};

export default function modal(state=INITAL_STATE, action) {
  switch (action.type) {
    case OPEN_MODAL:
    console.log('OPEN MODAL CALLED. payload is ', action.payload);
      return {
        ...state,
        selectedGif: action.payload.selectedGif,
        modalIsOpen: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        selectedGif: null,
        modalIsOpen: false
      };
    default:
      return state;
  }
}
