import React from 'react'
import Autosuggest from 'react-autosuggest';
import { Button } from 'semantic-ui-react'

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => {
  window.location = "https://everythingpremier.herokuapp.com/teams/" + suggestion.id
};

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      languages: []
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      languages: nextProps.teamData
    })
  }

  //get suggestions from search
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.state.languages.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };


  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  doDown = () => {
    window.location = "https://everythingpremier.herokuapp.com/" + "#column1home"
  }

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Enter Team to Search',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div id="search" type="text">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <img src="http://www.pngmart.com/files/3/Down-Arrow-PNG-File.png" onClick={this.doDown} id="godown" />
      </div>
    );
  }
}

export default Search
