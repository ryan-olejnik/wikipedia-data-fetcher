import React, { Component } from 'react';
import wtf from 'wtf_wikipedia';

class SearchForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      value: '',
      answer: 'results from wiki'
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSearch() {
    console.log('searching for ', this.state.value);
    try {
      wtf
        .fetch(this.state.value)
        .then(doc => {
          if (doc) {
            let result = doc.text();
            console.log(result);
            let firstSentance = result.substring(0, result.indexOf('. ') + 1);
            this.setState({ answer: firstSentance });
          } else {
            this.setState({ answer: 'Hmmm not sure!' });
          }
        })
        .catch(error => {
          console.log('Error fetching:', error);
        });
      throw new Error('test error');
    } catch (error) {
      console.log('Caught error:', error);
    }
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
        <p>{this.state.answer}</p>
      </div>
    );
  }
}

export default SearchForm;
