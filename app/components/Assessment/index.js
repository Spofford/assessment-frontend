import { connect } from "react-redux"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { default as Header } from "../Header"
import { default as Question } from "../Question"

const mapStateToProps = state => ({
  user: state.user
})

export class Assessment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.container}>
        <Header />
        <div className={style.leader}>
          <div className={style.standard}>
            <p><strong>Hi, {this.props.user.username}.</strong> We’re really happy to meet you. This questionnaire is what we could think up as the next best thing to getting to know you over coffee. We’ve created this to learn how we can better help you, and the best way to bring people together to create spaces.</p>
            <p>This questionnaire is totally anonymous.</p>
          </div>
          <Question />
        </div>

      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Assessment, style))
