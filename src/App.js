import logo from "./logo.svg";
import "./App.css";
import Accordion from "./components/Accordion";
import ChipsInput from "./components/ChipsInput";
import ProgressBar from "./components/ProgressBar";
import TodoApp from "./components/TodoApp";
import OTPInput from "./components/OTPInput";
import NestedCheckList from "./components/NestedCheckList";
import { useState } from "react";
import TabForm from "./components/TabForm";
import Pagination from "./components/Pagination";

function App() {
  // const [checked, setChecked] = useState({ 1: true });

  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <ChipsInput /> */}
      {/* <ProgressBar progress={100} /> */}
      {/* <TodoApp /> */}
      {/* <OTPInput />*/}
      {/* <NestedCheckList checked={checked} setChecked={setChecked} /> */}
      {/* <TabForm /> */}
      <Pagination />
    </div>
  );
}

export default App;
