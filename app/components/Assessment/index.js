
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { default as LightSignup } from "../LightSignup"

export class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  submit() {
    const user = {
      username: document.getElementById("signup-username").value
    }
    this.props.dispatch(Actions.userNew(user))
  }

  render() {
    if (this.props.user) {
      return (
        <Chat>
          <PhoenixChatbot />
        </Chat>
      )
    }
    return (
      <div className={style.leader}>
        <h1 className={style.title}>Spofford Assessment</h1>
        <LightSignup />
        <img
          role="presentation"
          className={style.circles}
          src="https://s3.amazonaws.com/learnphoenix-static-assets/images/circles-full.png" />
      </div>
    )
  }
}

export default Results
