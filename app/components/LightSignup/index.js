import React from "react"
import cssModules from "react-css-modules"
import { connect } from "react-redux"
import style from "./style.css"
import Actions from "../../redux/actions"

import { default as Button } from "../Button"

export class LightSignup extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit() {
    const user = {
      username: document.getElementById("signup-username").value
    }
    this.props.dispatch(Actions.userNew(user))
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.form}>
          <div className={style.inputGroup}>
            <input
              placeholder="Username"
              className={style.input}
              type="text"
              id="signup-username" />
          </div>
          <Button
            onClick={this.submit}
            style={{ width: "100%" }}
            type="primary">
            Submit
          </Button>
        </div>
      </div>
    )
  }
  /*
  submit() {
    fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ test: "not going to work" })
    })
    .then((res) => { return res.json() })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.warn(err);
    })
  }
  */
}

export default connect()(cssModules(LightSignup, style))
