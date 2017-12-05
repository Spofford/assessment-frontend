import React from "react"
import { connect } from "react-redux"
import Actions from "../../redux/actions"
import { default as App } from "./components/App"

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(Actions.userAuth())
  }

  render() {
    if (this.props.user.email) {
      return (<Chat />)
    }
    return (
      <div className={style.leader}>
        ...
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(cssModules(Home, style))
