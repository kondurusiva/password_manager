import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    passwordItemsList: [],
    isFilterActive: false,
  }

  toggleIsClicked = id => {
    this.setState(prevState => ({
      passwordItemsList: prevState.passwordItemsList.map(eachItem => {
        if (id === eachItem.id) {
          return {...prevState.passwordItemsList, isCheck: !eachItem.isCheck}
        }
        return eachItem
      }),
    }))
  }

  onChangeWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onAddPasswordItem = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newItem = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
      isCheck: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      passwordItemsList: [...prevState.passwordItemsList, newItem],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  deleteItem = itemId => {
    const {passwordItemsList} = this.state
    this.setState({
      passwordItemsList: passwordItemsList.filter(item => item.id !== itemId),
    })
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      passwordItemsList,
    } = this.state

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <div className="input-containers">
          <form className="form-container" onSubmit={this.onAddPasswordItem}>
            <h1 className="heading">Add New Password</h1>
            <div className="website-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-img"
              />
              <hr className="hr" />
              <input
                type="text"
                placeholder="Enter Website"
                className="website-input"
                onChange={this.onChangeWebsite}
                value={websiteInput}
              />
            </div>
            <div className="username-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="username-img"
              />
              <hr className="hr" />
              <input
                type="text"
                className="username-input"
                placeholder="Enter Username"
                value={usernameInput}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="password-img"
              />
              <hr className="hr" />
              <input
                className="password-input"
                type="password"
                onChange={this.onChangePassword}
                value={passwordInput}
                placeholder="Enter Password"
              />
            </div>
            <div className="add-btn-container">
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="manager-img"
          />
        </div>
        <div className="second-container">
          <div className="passwords-label">
            <h1 className="your-password-text">
              Your Passwords <span>{passwordItemsList.length}</span>
            </h1>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <hr className="hr2" />
              <input
                type="search"
                className="search-input"
                placeholder="search"
              />
            </div>
          </div>
          <hr className="hr3" />
          <div className="checkbox-container">
            <input className="check-box" id="checkbox" type="checkbox" />
            <label className="label-text" htmlFor="checkbox">
              show passwords
            </label>
          </div>
          <ul className="items-list">
            {passwordItemsList.map(item => (
              <PasswordItem
                key={item.id}
                deleteItem={this.deleteItem}
                passwordDetails={item}
                toggleIsClicked={this.toggleIsClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
