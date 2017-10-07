import React from 'react';

const SearchBar = (props) => {
  return (  
    <form onSubmit={props.handleSubmit}>
      <div className="form">
        <input required autoFocus="true" type="text" className="form-control" onChange={props.handleChange} placeholder="Search for a GIF" style={{"textAlign":"center"}}></input>
      </div>
    </form>
  );
}

export default SearchBar;
