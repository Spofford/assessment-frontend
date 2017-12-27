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
    this.state = {
      ready: false
    }
  }

  handleSelect = (selectValue) => {
    let obj = submitData.find(function (obj) { return obj.id === selectValue.id; });
    obj.selected = selectValue.selected
    obj.text = selectValue.text
    let self = this
    var found = false;
    for(var i = 0; i < submitData.length; i++) {
      if (submitData[i].selected == true) {
          self.setState({ ready: true },
          console.log(this.state))
          break;
      } else {
        self.setState({ ready: false })
      }
    }
  }


  render() {
    const data = this.props.question.response_choices;
    const listItems = data.map((d) => <ResponseButton onSelectAnswer={this.handleSelect} type={d.open} key={d.id} id={d.id}>{d.text}</ResponseButton>);

    //console.log(this.props.ready)
    return (
      <div>
        {listItems}
        { this.state.ready ? <h4 className={style.submitLink} onClick={this.submit}>Submit answers and continue</h4> : null }
      </div>
    )
  }
}

export default connect(mapStateToProps)(cssModules(Basic, style))
