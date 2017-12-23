import { connect } from "react-redux"
import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import Actions from "../../redux/actions"
import { default as ResponseButton } from "../ResponseButton"

const mapStateToProps = state => ({
  user: state.user,
  question: state.question
})

export class Basic extends React.Component {
  componentDidMount() {

  }

  submit() {

  }

  constructor(props) {
    super(props)
  }

  handleSelect = (selectValue) => {
    console.log(selectValue);
  }


  render() {
    const data =this.props.question.response_choices;
    const listItems = data.map((d) => <ResponseButton onSelectAnswer={this.handleSelect} type={d.open} key={d.id} id={d.id}>{d.text}</ResponseButton>);

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Basic, style))
