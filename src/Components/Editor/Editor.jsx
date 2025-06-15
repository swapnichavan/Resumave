import React from "react";
import {useDispatch} from "react-redux";
import ResumeFields from "../../config/ResumeFields";
import SingleEditor from "./SingleEditor";
import {FaSave} from "react-icons/fa";
import {resumeSave} from "../../store/Slices/ResumeSlice";
import { useParams } from "react-router-dom";
import Tab from "../Tab";
import MultiEditor from "./MultiEditor";
function Editor() {
  const dispatch = useDispatch();
  const {tab}=useParams()
  console.log(tab)
  const {multiple} = ResumeFields[tab];
  console.log( multiple,tab);
  // console.log(ResumeFields)
  const save = (e) => {
    dispatch(resumeSave());
    // console.log(e);
  };
  return (
    <div>
      <Tab activeTab={tab} />
      <form onSubmit={save} className="card my-8">
        {multiple && <MultiEditor tab={tab} />}
        {!multiple && <SingleEditor tab={tab} />}
        <button
          type="submit"
          className="btn-filled ml-auto mt-6 w-full gap-2 px-6 text-center md:w-auto">
          <span>Save</span>
          <FaSave />
        </button>
      </form>
    </div>
  );
}

export default Editor;
