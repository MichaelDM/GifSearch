import React, { Component } from 'react';
import './gifItem.css';

class GifItem extends Component {

  constructor(props) {
    super(props);
    this.state = {favorite: this.props.favStatus};
  }

  componentWillMount(){

    if(this.props.favs && this.props.gif){
      this.props.favs.data.filter(favGif =>{
        if(favGif.id === this.props.gif.id){
          this.setState({favorite: true});
        }
      });
    }
  }

  renderGifHeart = gif => {
    if (!this.props.authStatus) {
      return '';
    }

    if (this.state.favorite) {
      return (
        <i className="fa fa-heart"
        onClick={() => this.removeFavoriteHelper(gif)}
        ></i>
      );
    } else {
      return (
        <i className="fa fa-heart-o"
        onClick={() => this.addFavoriteHelper(gif)}
        ></i>
      );
    }
  }

  removeFavoriteHelper = gif => {
    this.setState({favorite: false});
    console.log('this.props is ', this.props);
    this.props.removeFavoriteGif(gif);
  }

  addFavoriteHelper = gif => {
    this.setState({favorite: true});
    this.props.addFavoriteGif(gif);
  }

  render() {
    const { gif, onGifSelect } = this.props;

    return (
      <div className="gif-item">
      {this.renderGifHeart(gif)}
        <img
          src={gif.images.downsized.url}
          onClick={() => onGifSelect(gif)}
        />
      </div>
    );
  }
}

export default GifItem;
