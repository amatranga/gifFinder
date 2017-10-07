import React from 'react';

const Gif = (props) => {
  let alt = props.alt + ' ' + (props.id + 1);
  let src = props.gif.images.downsized.url;
  return (
    <div className="col-lg-3 col-md-4 col-xs-6">
      <a href="#" class="d-block mb-4 h-100">
        <img src={src} alt={alt} className="img-fluid img-thumbnail"></img>
      </a>
    </div>
  );
}

export default Gif;
