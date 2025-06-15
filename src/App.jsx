import "./App.css";
import Editor from "./Components/Editor/Editor";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import Tab from "./Components/Tab";
import { useParams } from "react-router-dom";

function App() {
  // const tab = "contact";
  
  return (
    <div>
      <Header />
      {/* <Loader /> */}
      {/* <Editor tab={tab} /> */}
    </div>
  );
}

export default App;
