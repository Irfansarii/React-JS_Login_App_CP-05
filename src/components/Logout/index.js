import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="button" className="Logout-button" onClick={logout}>
      Logout
    </button>
  )
}
export default Logout
