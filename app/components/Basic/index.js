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

const submitData = [];

export class Basic extends React.Component {


  componentDidMount() {
    const data = this.props.question.response_choices;
    data.forEach(function(arg) {
      submitData.push(
        {
          id:arg.id,
          selected:false,
          text:null
        }
      )
    })
  }

  submit() {

  }

  constructor(props) {
    super(props)
  }

  handleSelect = (selectValue) => {
    var obj = submitData.find(function (obj) { return obj.id === selectValue.id; });
    // console.log(selectValue)
    obj.selected = selectValue.selected
    obj.text = selectValue.text
    console.log(submitData)
  }


  render() {
    const data = this.props.question.response_choices;
    const listItems = data.map((d) => <ResponseButton onSelectAnswer={this.handleSelect} type={d.open} key={d.id} id={d.id}>{d.text}</ResponseButton>);

    return (
      <div>
        {listItems}
      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Basic, style))
