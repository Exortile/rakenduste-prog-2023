import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"

const openUrl = url => window.open(url, "_blank", "noreferrer")

function Huvid() {
  return (
    <div className="App-list">
      <p>Huvid:</p>
      <ul>
        <li>Muusika</li>
        <li>Programmeerimine</li>
        <li>Magamine</li>
        <li>Pitsa</li>
        <li>Lasanje</li>
        <li>Šokolaad</li>
      </ul>
    </div>
  )
}

function Vorm() {
  return (
    <div className="App-form">
      <form>
        <label for="fname">First name: </label>
        <input
          type="text"
          id="fname"
          name="fname"
          value="John"
        />{" "}
        <br />
        <label for="lname">Last name: </label>
        <input
          type="text"
          id="lname"
          name="lname"
          value="Doe"
        />{" "}
        <br />
        <label for="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
        />{" "}
        <br />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  )
}

function CTANupp() {
  return (
    <button
      className="button"
      onClick={() =>
        openUrl("https://github.com/Exortile/rakenduste-prog-2023")
      }
    >
      Repo
    </button>
  )
}

// eslint-disable-next-line
function OtherApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />

        <p>
          <u>Sten-Kristjan Prantsu</u>
        </p>

        <Huvid />
        <Vorm />
        <CTANupp />
      </header>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {<Hello name="Sten" />
        <Hello name="Vello" />
        <Hello
          name="Sille"
          age={20}
          school="TLU"
        />} */}

        <Maths />
        <Maths />
        <Maths />
      </header>
    </div>
  )
}

export default App
