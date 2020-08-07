import React, { useState } from "react";

class Phrase extends React.Component {
    constructor(props) {
      super(props);
      this.state = { phrase: '' };
    }
    
    myChangeHandler = (event) => {
      this.setState({phrase: event.target.value});
      this.props.updatePhrase(event.target.value);
    }

    render() {
      return (
        <form>
        <p>Movie title:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }

  export default Phrase;