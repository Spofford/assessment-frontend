import { connect } from "react-redux"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

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
        <h1>Assessment</h1>
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
