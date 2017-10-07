import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  return (
    <div className="row text-center text-lg-left">
      {props.gifs.map((gif, idx) =>
        <Gif key={idx} gif={gif} alt={props.alt} id={idx} />
      )}
    </div>
  );
}

export default GifList;
