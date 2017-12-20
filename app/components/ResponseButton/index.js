import React from "react"
import PropTypes from 'prop-types';
import cssModules from "react-css-modules"
import style from "./style.css"

class ResponseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
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
      <div className={style.buttonContainer}>
        <button onClick={this.handleClick} className={this.state.isToggleOn ? style.chosen : style.response}>
          {this.props.children}
        </button>
        {this.state.isToggleOn&&this.props.type ? <input className={style.openInput} type="text" placeholder="Other Response" required /> : null }
      </div>
    );
  }
}

export default cssModules(ResponseButton, style)
