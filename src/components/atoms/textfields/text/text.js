import "./text.scss"

const Text = ({ text, setText, placeholder }) => {
    return (
        <input placeholder={placeholder} className="text" type="text" value={text} onChange={e => setText(e.target.value)} />
    )
}

export default Text;