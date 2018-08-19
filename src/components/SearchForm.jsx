import React, { Component } from 'react';

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSearch() {
    console.log('searching for ', this.state.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          placeholder="Search"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
