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
import AutoCompleteSearch from "./components/AutoCompleteSearch";
import FileExplorer from "./components/FileExplorer";
import GiraTracker from "./components/GiraTracker";
import ImageCaurosal from "./components/ImageCaurosal";
import GridGame from "./components/GridGame";
import CounterApp from "./components/CounterApp";
import Toaster from "./components/Toaster.jsx";

function App() {
  // const [checked, setChecked] = useState({ 1: true });

  return (
    <div className="App m-3">
      <OTPInput />
    </div>
  );
}

export default App;
