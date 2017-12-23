import { connect } from "react-redux"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import Actions from "../../redux/actions"
import { default as Basic } from "../Basic"

const mapStateToProps = state => ({
  user: state.user,
  question: state.question
})

export class Question extends React.Component {
  componentDidMount() {
    const question = {
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
    const type = this.props.question.question_type

    let responses = null;
    if (type =="basic") {
      responses = <Basic />;
    }

    return (
      <div className={style.questionContainer}>
        <div className={style.standard}>
          <p>{this.props.question.text}</p>
        </div>
        <div className={style.response}>
          {responses}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Question, style))
