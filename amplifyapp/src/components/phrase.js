import React, { useState } from "react";

class Phrase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phrase: "" };
  }

  myChangeHandler = (event) => {
    this.setState({ phrase: event.target.value });
    this.props.updatePhrase(event.target.value);
  };

  render() {
    return (
      <form>
        <h5 className="login-heading mb-4" style={{ color: "#ff9234" }}>
          Movie title:
        </h5>
        <input
          style={{ color: "#35d0ba" }}
          className="form-control"
          type="text"
          onChange={this.myChangeHandler}
        />
      </form>
    );
  }
}

export default Phrase;
