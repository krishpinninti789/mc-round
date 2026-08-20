import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import ChipsInput from "./components/ChipsInput";
import ProgressBar from "./components/ProgressBar";
import TodoApp from "./components/TodoApp";
import OTPInput from "./components/OTPInput";

function App() {
  return (
    <div className="App m-2">
      {/* <Accordion /> */}
      {/* <ChipsInput /> */}
      {/* <ProgressBar progress={100} /> */}
      {/* <TodoApp /> */}
      <OTPInput />
    </div>
  );
}

export default App;
