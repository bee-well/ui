import "./password.scss"

const Password = ({ password, setPassword, placeholder }) => {
    return (
        <input placeholder={placeholder} className="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
    )
}

export default Password