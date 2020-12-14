import React from 'react'
import '../sign-in/sign-in.styles.scss'
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({ email: '', password: '' })
  }
  render() {
    return (
      <div className='sign-in'>
        <h1 className='title'>I already have an account</h1>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>Login</CustomButton>
        </form>
      </div>
    )
  }
}
export default SignIn
