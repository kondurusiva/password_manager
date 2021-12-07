import './index.css'

const PasswordItem = props => {
  const {passwordDetails, toggleIsClicked} = props
  const {id, website, username, password, isCheck} = passwordDetails
  const initial = website ? website[0].toUpperCase() : ''
  const passwordIsCheck = isCheck ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-img"
    />
  )
  return (
    <li className="item-container">
      <p>{initial}</p>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <p>{passwordIsCheck}</p>
      </div>
      <button className="del-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
