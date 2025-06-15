import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ResumeFields from "../../config/ResumeFields";
import Input from "../UI/Input";
import {updateResumeValue} from "../../store/Slices/ResumeSlice";
function SingleEditor({tab}) {
  const dipatch = useDispatch();
  const {fields} = ResumeFields[tab];
  const resumeData = useSelector((state) => state.resume[tab]);
  console.log(resumeData);
  console.log(fields);
  // console.log(resumeData[fields[0].name]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    dipatch(updateResumeValue({tab, name, value}));
  };

  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6 md:gap-x-8">
      {fields.map((field) => (
        <Input
          key={field.name}
          {...field}
          value={resumeData?.[field.name]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

export default SingleEditor;
