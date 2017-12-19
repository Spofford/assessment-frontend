import { connect } from "react-redux"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import Actions from "../../redux/actions"

const mapStateToProps = state => ({
  user: state.user,
  question: state.question
})

export class Question extends React.Component {
  componentDidMount() {
    console.log(this.props)
    const question = {
      survey_id: 1,
      order_id: 1
    }
    this.props.dispatch(Actions.getQuestion(question))
  }

  submit() {
    this.props.dispatch(Actions.submitResponse())
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style.questioncontainer}>
        <p>{this.props.question.text}</p>

      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Question, style))
