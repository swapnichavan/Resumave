import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ResumeFields from "../../config/ResumeFields";
import Input from "../UI/Input";
function SingleEditor({tab}) {
  const dipatch = useDispatch();
  const {fields} = ResumeFields[tab];
  const resumeData = useSelector((state) => state.resume[tab]);
  console.log(resumeData);
  console.log(fields);
  // console.log(resumeData[fields[0].name]);
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6 md:gap-x-8">
      {fields.map((field) => (
        <Input key={field.name} {...field} value={resumeData?.[field.name]} />
      ))}
    </div>
  );
}

export default SingleEditor;
