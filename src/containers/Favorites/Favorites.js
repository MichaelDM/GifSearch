import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as modalActions from '../../actions/modalActions';
import { fetchFavoritedGifs, removeFavoriteGif } from '../../actions/favoriteGifActions';
import '../Home/home.css';
import GifList from '../../components/GifList/GifList';
import GifModal from '../../components/GifList/GifModal';

class Favorites extends Component {

  componentWillMount() {
    this.props.dispatch(fetchFavoritedGifs());
  }

  requestModalOpen = selectedGif => this.props.dispatch(modalActions.openModal({selectedGif}));

  removeFavoriteGif = gif => this.props.dispatch(removeFavoriteGif(gif))

  get requestModalClose() {
    return this.props.dispatch(modalActions.closeModal());
  }


  render() {
    // console.log('favavoriteGifs in component is ', this.props.favoriteGifs);
    return (
      <div>
        <GifList
          authStatus={this.props.authStatus}
          gifs={this.props.favoriteGifs}
          onGifSelect={selectedGif => this.requestModalOpen(selectedGif)}
          removeFavoriteGif={gif => this.removeFavoriteGif(gif)}
          favStatus={true}
        />
        <GifModal
          modalIsOpen={this.props.modalIsOpen}
          selectedGif={this.props.selectedGif}
          onRequestClose={() => this.requestModalClose}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs,
    modalIsOpen: state.modal.modalIsOpen,
    selectedGif: state.modal.selectedGif,
    authStatus: state.auth.authenticated,
    favoriteGifs: state.fav,
   };
}

export default connect(mapStateToProps)(Favorites);
