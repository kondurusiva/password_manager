import './index.css'

const PasswordItem = props => {
  const {passwordDetails, toggleIsClicked} = props
  const {
    id,
    website,
    username,
    password,
    isCheck,
    initialClassName,
  } = passwordDetails
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

  const onClickCheckbox = () => {
    toggleIsClicked(id)
  }

  const onDeleteItem = () => {
    const {deleteItem} = props
    deleteItem(id)
  }
  return (
    <li className="item-container">
      <p className={initialClassName}>{initial}</p>
      <div>
        <p className="website">{website}</p>
        <p className="username">{username}</p>
        <p>{passwordIsCheck}</p>
      </div>
      <button
        testid="delete"
        onClick={onDeleteItem}
        className="del-btn"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
