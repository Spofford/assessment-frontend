import { connect } from "react-redux"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { default as Header } from "../Header"

const mapStateToProps = state => ({
  user: state.user
})

export class Assessment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.user.username) {
      return (
        <div className={style.container}>
          <Header />
          <div className={style.leader}>
            <h1 className={style.title}>Hi {this.props.user.username}</h1>
          </div>
        </div>
      )
    }
    return (
      <div className={style.leader}>
        <h1 className={style.title}>Spofford Assessment</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Assessment, style))
