import {Component} from 'react'
import './index.css'

class PasswordManager extends Component {
  render() {
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
          <form className="form-container">
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
            <p className="your-password-text">Your Passwords</p>
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
        </div>
      </div>
    )
  }
}

export default PasswordManager
