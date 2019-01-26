import React, { Component } from "react";
import PropTypes from "prop-types";

class SendMsg extends Component {
  state = { mensagem: { username: this.props.user.username, text: "" } };

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.mensagem.text.trim().length === 0;
  };

  handleInput = event => {
    const msg = event.target.value;
    this.setState(currentState => ({
      ...currentState,
      mensagem: { ...currentState.mensagem, text: msg }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSendMsg, user } = this.props;
    const { mensagem } = this.state;
    onSendMsg(mensagem);
    this.setState({
      mensagem: { username: user.username, text: "" }
    });
  };

  render() {
    const { mensagem } = this.state;

    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your message..."
            value={mensagem.text}
            onChange={this.handleInput}
          />
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SendMsg.propTypes = {
  onSendMsg: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default SendMsg;
