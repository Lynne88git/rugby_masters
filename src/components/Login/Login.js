import React from 'react'
import './Login.scss'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      passwordError: false,
      email: '',
      emailError: false,
      emailError2: false,
      formValid: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  isValidEmail(email) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)
  }

  handleBlur(e) {
    const name = e.target.name
    const value = e.target.value

    this.setState({ [name]: value })

    if (value.length <= 0 && name == 'password') {
      this.setState({ passwordError: true })
    } else {
      this.setState({ passwordError: false })
    }

    if (value.length <= 0 && name == 'email') {
      this.setState({ emailError: true })
      this.setState({ emailError2: false })
    } else {
      this.setState({ emailError: false })
      if (this.isValidEmail(value)) {
        this.setState({ emailError2: false })
      } else {
        this.setState({ emailError2: true })
      }
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    const { password, email, passwordError, emailError, emailError2 } = this.state

    this.setState({ passwordError: password ? false : true })
    this.setState({ emailError: email ? false : true })
    if (email && !emailError) {
      this.setState({ emailError2: this.isValidEmail(email) ? false : true })
    }

    if (password && email && !passwordError && !emailError && !emailError2) {
      this.setState({ formValid: true })
    } else {
      this.setState({ formValid: false })
    }

    e.preventDefault()
  }

  render() {
    const { password, email, passwordError, emailError, emailError2, formValid } = this.state

    if (!formValid) {
      return (
        <>
          <div className="card border-0 px-3 rounded-2 mb-3 py-2 mx-auto mt-3 login-form">
            <div className="card-header bg-transparent border-0 text-center text-uppercase">
              <h6>Log In</h6>
            </div>
            <div className="card-body">
              <form
                action="/"
                onSubmit={(e) => this.handleSubmit(e)}
                encType="multipart/form-data"
                autoComplete="off">
                <div className="form-group">
                  <label className="mb-0">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {emailError ? (
                    <div className="alert alert-danger mt-2">Email is a required field.</div>
                  ) : (
                    ''
                  )}
                  {emailError2 ? <div className="alert alert-danger mt-2">Email invalid.</div> : ''}
                </div>
                <div className="form-group">
                  <label className="mb-0">
                    Password<span className="text-danger">*</span>
                  </label>
                  <input
                    name="password"
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  {passwordError ? (
                    <div className="alert alert-danger mt-2">Password is a required field.</div>
                  ) : (
                    ''
                  )}
                </div>
                <p className="text-center mb-0">
                  <input
                    type="submit"
                    className="w-100 text-uppercase button-primary"
                    value="Submit Now"
                  />
                </p>
              </form>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <div className="thankyou_details">
          <div className="alert alert-success mt-3">Mail sent successfully</div>
        </div>
      )
    }
  }
}
