import { connect } from "react-redux"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import Actions from "../../redux/actions"
import { combineReducers } from 'redux'
import { default as ResponseButton } from "../ResponseButton"

const mapStateToProps = state => ({
  user: state.user,
  question: state.question
})

const submitData = [];

export class Basic extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    const data = this.props.question.response_choices;
    const user = this.props.user.id;

    data.forEach(function(arg) {
      submitData.push(
        {
          user: {id: user},
          response_choice: {id: arg.id},
          response_value: false,
          text: null
        }
      )
    })
  }

  submit() {
    const user = this.props.user.id
    for(var i = 0; i < submitData.length; i++) {
      submitData[i].user.id = user
      this.props.dispatch(Actions.submitData(submitData[i]))
    }
    console.log(submitData)
  }

  handleSelect = (selectValue) => {
    let obj = submitData.find(function (obj) { return obj.response_choice.id === selectValue.id; });
    obj.response_value = selectValue.response_value
    obj.text = selectValue.text
    obj.user.id = this.props.user.id
    let self = this
    var found = false;
    for(var i = 0; i < submitData.length; i++) {
      if (submitData[i].response_value == true) {
          self.setState({ ready: true })
          break;
      } else {
        self.setState({ ready: false })
      }
    }
  }


  render() {
    const data = this.props.question.response_choices;
    const listItems = data.map((d) => <ResponseButton onSelectAnswer={this.handleSelect} type={d.open} key={d.id} id={d.id}>{d.text}</ResponseButton>);

    return (
      <div>
        {listItems}
        { this.state.ready ? <h4 className={style.submitLink} onClick={this.submit}>Submit answers and continue</h4> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Basic, style))
