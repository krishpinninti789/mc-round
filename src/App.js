import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import ChipsInput from "./components/ChipsInput";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <ChipsInput /> */}
      <ProgressBar progress={100} />
      <ProgressBar progress={90} />
      <ProgressBar progress={80} />
      <ProgressBar progress={70} />
      <ProgressBar progress={67.4} />
      <ProgressBar progress={30} />
      <ProgressBar progress={3} />
      <ProgressBar progress={0.0111} />
    </div>
  );
}

export default App;
