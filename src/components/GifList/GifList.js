import React from 'react';
import GiftItem from './GifItem';

const GiftList = ({ gifs, onGifSelect, authStatus, addFavoriteGif, removeFavoriteGif, favStatus, favs }) => {
  // console.log('in GifLists, I am passing in ', gifs);
  const giftItems = gifs.data.map(image => {
    return <GiftItem
      key={image.id}
      gif={image}
      onGifSelect={onGifSelect}
      authStatus={authStatus}
      addFavoriteGif={addFavoriteGif}
      removeFavoriteGif={removeFavoriteGif}
      favStatus={favStatus}
      favs={favs}
    />
  });

  return <div className="gif-list">{giftItems}</div>
}

export default GiftList;
