import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const options = [
    { value: 0, label: 'Horror' },
    { value: 1, label: 'Adventure' },
    { value: 2, label: 'Sci-fi' },
    { value: 3, label: 'Thriller' },
    { value: 4, label: 'Romance' }
];

class Genres extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <MultiSelect
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Genres;