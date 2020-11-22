import React, { Component } from "react";
import { connect } from "react-redux";
import { addContent, getContent, updateContent } from "../Redux/actions";

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

  componentDidMount() {
    this.props.getContent();
  }
  render() {
    const { text } = this.state;
    const { handleChange } = this;
    const {
      loading,
      loadingMsg,
      content,
      err,
      addContent,
      updateContent,
    } = this.props;
    return (
      <div>
        {loading && loadingMsg && <p>{loadingMsg}</p>}
        {err && <p>{err}</p>}
        {content && <h2>{content.text}</h2>}

        {/* I could impliment edit mode here */}
        <input
          type="text"
          placeholder="What is in your mind??"
          value={text}
          onChange={handleChange}
        />

        <button onClick={() => addContent(text)}>Add</button>
        <button onClick={() => updateContent({ text, id: content._id })}>
          Update
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  loadingMsg: state.loadingMsg,
  content: state.content,
  err: state.err,
});

const mapDispatchToProps = (dispatch) => ({
  addContent: (text) => dispatch(addContent(text)),
  getContent: () => dispatch(getContent()),
  updateContent: (payload) => dispatch(updateContent(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
