import React from "react"
import PropTypes from 'prop-types';
import cssModules from "react-css-modules"
import style from "./style.css"

class ResponseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick} className={this.state.isToggleOn ? style.response : style.chosen}>
        {this.props.children}
      </button>
    );
  }
}

export default cssModules(ResponseButton, style)