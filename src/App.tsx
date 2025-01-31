import './App.css'
import {TerminalContextProvider} from "react-terminal";
import Terminal from "./terminal/Terminal.tsx";

function App() {

  return (
      <TerminalContextProvider>
        <Terminal/>
      </TerminalContextProvider>
  )
}

export default App
