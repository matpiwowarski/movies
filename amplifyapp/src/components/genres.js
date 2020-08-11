import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

const options = [
  { value: 1, label: "Horror" },
  { value: 2, label: "Adventure" },
  { value: 3, label: "Sci-fi" },
  { value: 4, label: "Thriller" },
  { value: 5, label: "Romance" },
  { value: 6, label: "Drama" },
];

class Genres extends React.Component {
  state = {
    selectedOptions: [],
  };
  handleChange = (selectedOptions) => {
    this.setState({ selectedOptions });
    this.props.updateGenres(selectedOptions);
  };
  render() {
    const { selectedOptions } = this.state;

    return (
      <form style={{ color: "#35d0ba" }}>
        <h5 className="login-heading mb-4" style={{ color: "#ff9234" }}>
          Movie genre:
        </h5>
        <MultiSelect
          value={selectedOptions}
          onChange={this.handleChange}
          options={options}
        />
      </form>
    );
  }
}

export default Genres;
