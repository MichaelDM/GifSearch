import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  onInputChange = e => {
    this.props.requestGifs(this.props.term);
    this.props.searchTerm(e.target.value);
  }

  render(){
    return(
      <div className="search">
        <input
          onChange={this.onInputChange}
          placeholder={'Enter text to search for gifs'}
          value={this.props.term}
          >
        </input>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { term: state.term.term };
}

export default connect(mapStateToProps)(SearchBar);
