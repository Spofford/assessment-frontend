import React from "react"
import cssModules from "react-css-modules"
import { connect } from "react-redux"
import style from "./style.css"
import Actions from "../../redux/actions"

import { default as Button } from "../Button"
import { default as Input } from "../Input"



export class LightSignup extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit() {
    const user = {
      username: document.getElementById("signup-username").value
    }
    this.props.dispatch(Actions.surveyNew(user))
  }

  render() {
    return (
        <div className={style.form}>
          <div className={style.inputGroup}>
            <Input
              placeholder="First Name"
              className={style.input}
              type="large"
              id="signup-username" />
              <Button
                onClick={this.submit}
                type="primary">
                Start Assessment
              </Button>
          </div>

        </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(cssModules(LightSignup, style))
