import React, { Component } from 'react';

class AddPlayerForm extends Component {

  state = {
    value: ""
  };
  handleValueChange = (e) => {
    this.setState({value : e.target.value})
  }


  render() {
    const {value} = this.state
    return (
      <div>
        <form>
          <input type='text' value={value} onChange={this.handleValueChange} placeholder="Enter a player's name" />
          <input type='submit' value="Add player" />
        </form>
      </div>
    );
  }
}

export default AddPlayerForm;