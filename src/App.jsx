import {useEffect} from "react";
import "./App.css";
import Editor from "./Components/Editor/Editor";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import {useParams} from "react-router-dom";
import Tab from "./Components/Tab";

function App() {
  useEffect(() => {}, []);
  const tab = "contact";
  return (
    <div>
      <Header />
      {/* <Loader /> */}
      {/* <Tab activeTab={tab} /> */}
      {/* <Editor tab={tab} /> */}
    </div>
  );
}

export default App;
