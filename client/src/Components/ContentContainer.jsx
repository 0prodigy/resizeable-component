import React, { Component } from "react";

export class ContentContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { text } = this.state;
    const { handleChange } = this;
    return (
      <div>
        <input
          type="text"
          placeholder="What is in your mind??"
          value={text}
          onChange={handleChange}
        />
        <button>Add</button>
        <button>Update</button>
      </div>
    );
  }
}

export default ContentContainer;
