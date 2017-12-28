import React from "react"
import PropTypes from 'prop-types';
import cssModules from "react-css-modules"
import style from "./style.css"

class ResponseButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      inputValue: ''
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  updateInputValue = (evt) => {

    this.setState({
      inputValue: evt.target.value
    });

    let selected = null

    if(evt.target.value) {
      selected = true;
    } else {
      selected = false;
    }

    this.props.onSelectAnswer({
      id: this.props.id,
      text: evt.target.value,
      response_value: selected
    })

    /*

    */
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    let self = this;
    if (!this.props.type) {
      this.props.onSelectAnswer({
        id: this.props.id,
        response_value: !self.state.isToggleOn
      })
    }
  }

  render() {
    return (
      <div className={style.buttonContainer}>
        <button onClick={this.handleClick} id={this.props.id} data-chosen={this.state.isToggleOn} className={this.state.isToggleOn ? style.chosen : style.response}>
          {this.props.children}
        </button>
        {this.state.isToggleOn&&this.props.type ? <input className={style.openInput} placeholder="Other Response" value={this.state.inputValue} onChange={this.updateInputValue} /> : null }
      </div>
    );
  }
}

export default cssModules(ResponseButton, style)
