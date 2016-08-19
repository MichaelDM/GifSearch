import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar/SearchBar';
import './home.css';
import GifList from '../../components/GifList/GifList';
import GifModal from '../../components/GifList/GifModal';
import * as gifActions from '../../actions/gifActions';
import * as modalActions from '../../actions/modalActions';
import { addFavoriteGif, removeFavoriteGif, fetchFavoritedGifs } from '../../actions/favoriteGifActions';
import { searchtermAction as saveSearchTerm } from '../../actions/searchtermActions';

class Home extends Component {

  componentWillMount() {
    if(this.props.authStatus){
      this.props.dispatch(fetchFavoritedGifs());
    }
  }

  requestGifs = term => this.props.dispatch(gifActions.requestGifs(term));

  requestModalOpen = selectedGif => this.props.dispatch(modalActions.openModal({selectedGif}));

  addGifFavorite = gif => this.props.dispatch(addFavoriteGif(gif));

  removeFavoriteGif = gif => this.props.dispatch(removeFavoriteGif(gif));

  saveSearchTerm = term => this.props.dispatch(saveSearchTerm(term));

  get requestModalClose() {
    return this.props.dispatch(modalActions.closeModal());
  }

  render() {
    return (
      <div>
        <SearchBar
          requestGifs={term => this.requestGifs(term)}
          searchTerm={term => this.saveSearchTerm(term)}
        />
        <GifList
          authStatus={this.props.authStatus}
          gifs={this.props.gifs}
          onGifSelect={selectedGif => this.requestModalOpen(selectedGif)}
          addFavoriteGif={gif => this.addGifFavorite(gif)}
          removeFavoriteGif={gif => this.removeFavoriteGif(gif)}
          favStatus={false}
          favs={this.props.fav || null}
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
    fav: state.fav,
   };
}

export default connect(mapStateToProps)(Home);
