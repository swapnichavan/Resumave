import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import ResumeFields from "../../config/ResumeFields";
import SingleEditor from "./SingleEditor";
import {FaSave} from "react-icons/fa";
import {resumeSave} from "../../store/Slices/ResumeSlice";
import {useParams} from "react-router-dom";
import Tab from "../Tab";
import MultiEditor from "./MultiEditor";
import Preview from "../Resume/Preview";
// import Resume from "../Resume/html";
function Editor() {
  const dispatch = useDispatch();
  const {tab} = useParams();
  const {multiple} = ResumeFields[tab];
  console.log(multiple, tab);
  // console.log(ResumeFields)
  const save = (e) => {
    console.log(e);
    e?.preventDefault();
    dispatch(resumeSave());
    // console.log(e);
  };

  useEffect(() => {
    const interval = setInterval(save, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="mx-auto mt-8 flex max-w-screen-xl 2xl:max-w-screen-2xl flex-col-reverse gap-10
    px-3 pb-8 md:flex-row md:mt-8 2xl:mt-14 2xl:gap-16
    ">
      <Preview />
      <div className="flex-grow">
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
    </div>
  );
}

export default Editor;
