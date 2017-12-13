import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import { default as LightSignup } from "../LightSignup"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

const mapStateToProps = state => ({
  user: state.user
})

export class Home extends React.Component {

  render() {
    if (this.props.user.username) {
      return <Redirect to='/assessment'/>;
    }
    return (
      <div className={style.container}>
        <img
          role="presentation"
          className={style.logo}
          src="https://s3.us-east-2.amazonaws.com/brand-collateral/spofford_ID_K.png" />

        <div className={style.body}>
          <p>Thanks for visiting! We&#8217;ve put together a simple questionnaire to help us better understand how we can be of assistance to people like you. No email or login is required to take the questionnaire. Enter your first name in the field below and click the button to get started.</p>

        </div>

        <LightSignup />

      </div>
    )
  }

}

export default connect(mapStateToProps)(cssModules(Home, style))
