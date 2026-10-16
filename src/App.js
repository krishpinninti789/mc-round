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
import StepperComponent from "./components/StepperComponent.jsx";
import DataPagination from "./components/DataPagination.jsx";
import VirtualizedList from "./components/VirtualizedList.jsx";
import { V_DATA } from "./components/data/vdata.js";
import RatingStars from "./components/RatingStars.jsx";

function App() {
  // const [checked, setChecked] = useState({ 1: true });
  const data = V_DATA

  return (
    <div className="App m-3">
      <RatingStars />
    </div>
  );
}

export default App;
