import { combineReducers } from "redux"

function question(state = {
  text: "",
  question_type: "",
  response_choices: []
}, action) {
  switch (action.type) {
    case "NEXT_QUESTION":
      // console.log(action.payload.question)
      return Object.assign({}, state, {
        text: action.payload.question.text,
        question_type: action.payload.question.question_type,
        response_choices: action.payload.question.response_choices
      })
    default: return state
  }
}

function user(state = {
  username: "",
  id: "",
}, action) {
  switch (action.type) {
    case "USER_NEW":
      return Object.assign({}, state, {
        username: action.payload.user.username,
        id: action.payload.user.id
      })
    case "USER_LOGIN":
      return Object.assign({}, state, {
        username: action.payload.user.username,
        id: action.payload.user.id
      })
    case "USER_AUTH":
      return Object.assign({}, state, {
        username: action.payload.user.username,
        id: action.payload.user.id
      })
    default: return state
  }
}

const reducers = combineReducers({
  user, question
})

export default reducers
