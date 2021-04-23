import {useState} from "react"
import SignUpModal from "./components/organisms/modals/sign-up-modal"

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setOpen(true)}>test</button>
      <SignUpModal 
        open={open}
        onClose={() => setOpen(false)}
        onSignUp={() => alert("sign up")}
      />
    </div>
  );
}

export default App;
