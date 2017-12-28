const Actions = {}

Actions.surveyNew = function surveyNew(user) {
  return dispatch => fetch("http://localhost:4000/api/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user })
  })
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    /* If success, log the user in */
    localStorage.token = res.data.token
    /* Then send action to reducer */
    dispatch({
      type: "USER_NEW",
      payload: {
        user: res.data
      }
    })
    dispatch(Actions.userAuth())
  })
  .catch((err) => {
    console.warn(err)
  })
}

Actions.getQuestion = function getQuestion(question) {
  return dispatch => fetch(`http://localhost:4000/api/questions?order_value=${question.order_id}`)
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    /* Then send action to reducer */
    dispatch({
      type: "NEXT_QUESTION",
      payload: {
        question: res
      }
    })
  })
  .catch((err) => {
    console.warn(err)
  })
}

Actions.submitData = function submitData(response) {
  return dispatch => fetch("http://localhost:4000/api/responses", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ response })
  })
  .then((res) => {
    return res.json()
  })
}

Actions.userLogin = function userLogin(user) {
  return dispatch => fetch("http://localhost:4000/auth/identity/callback", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: user.username,
    })
  })
  .then((res) => { return res.json() })
  .then((res) => {
    /* If success, log the user in */
    localStorage.token = res.data.token
    /* Then send action to reducer */
    dispatch({
      type: "USER_LOGIN",
      payload: {
        user: res.data
      }
    })
    dispatch(Actions.userAuth())
  })
}

Actions.userAuth = function userAuth() {
  return dispatch => fetch("http://localhost:4000/auth/me", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
  .then((res) => { return res.json() })
  .then((res) => {
    dispatch({
      type: "USER_AUTH",
      payload: {
        user: res
      }
    })
  })
  .catch((err) => {
    console.warn(err)
  })
}

export default Actions
