import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ResumeFields from "../../config/ResumeFields";
import {LuPlus} from "react-icons/lu";
import {
  addNewIndex,
  deleteIndex,
  moveIndex,
  updateResumeValue,
} from "../../store/Slices/ResumeSlice";
import Input from "../UI/Input";
import {FaArrowDown, FaArrowUp, FaTrash} from "react-icons/fa";
import {TbArrowsMinimize} from "react-icons/tb";
import {FaPencil} from "react-icons/fa6";

function MultiEditor({tab}) {
  const {fields} = ResumeFields[tab];
  const [selectedCard, setSelectedCard] = useState(null);
  const dispatch = useDispatch();
  const resumeData = useSelector((state) => state.resume[tab]);
  console.log(fields);
  console.log(tab, selectedCard);
  console.log(resumeData);

  const handleChange = (e, index) => {
    const {name, value} = e.target;
    console.log(name, value, index);
    dispatch(updateResumeValue({tab, name, value, index}));
  };

  const addNew = () => {
    dispatch(addNewIndex({tab, name: "degree", value: "new"}));
    setSelectedCard(resumeData.length);
    console.log(selectedCard);
  };

  const deleteCard = (index) => {
    console.log(index);
    dispatch(deleteIndex({tab, index}));
    setSelectedCard(null);
    console.log("Deleted card at index:", index);
  };
  return (
    <div>
      <button
        type="button"
        className="btn mb-6 ml-auto bg-grey-600/75 text-sm 2xl:text-base"
        onClick={addNew}>
        <LuPlus />
        <span>Add New</span>
      </button>
      {resumeData?.length === 0 && (
        <div className="my-16">
          <p className="text-center text-grey-500">Please Add New {tab}</p>
        </div>
      )}
      <div className="space-y-5">
        {resumeData.map((e, i) => (
          <div
            key={i}
            className="card h-full py-3 transition all duration-1000"
            onClick={() => setSelectedCard(i)}>
            <h3 className="flex items-center justify-between gap-5">
              <span className="mr-auto text-sm md:text-base truncate">
                {Object.values(e)[0] || "Untitled"}
              </span>
              <button
                disabled={i == 0}
                className="hover:text-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={(_) => {
                  _.stopPropagation();
                  dispatch(moveIndex({tab, index: i, dir: "up"}));
                }}>
                <FaArrowUp />
              </button>
              <button
                disabled={i === resumeData.length - 1}
                className="hover:text-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={(_) => {
                  _.stopPropagation();
                  dispatch(moveIndex({tab, index: i}));
                }}>
                <FaArrowDown />
              </button>
              {selectedCard === i ? (
                <button
                  type="button"
                  onClick={(_) => {
                    _.stopPropagation();
                    setSelectedCard(null);
                  }}>
                  <TbArrowsMinimize />
                </button>
              ) : (
                <button type="button" className="text-teal-400">
                  <FaPencil />
                </button>
              )}
              <button
                type="button"
                className="text-red-500"
                onClick={(_) => {
                  _.stopPropagation();
                  deleteCard(i);
                }}>
                <FaTrash />
              </button>
            </h3>
          </div>
        ))}
      </div>
      <div>
        {resumeData.map((e, i) => (
          <div key={i}>
            {selectedCard === i && (
              <div>
                {fields.map((field) => (
                  <Input
                    {...field}
                    key={field.name}
                    value={resumeData[i]?.[field.name]}
                    onChange={(e) => handleChange(e, i)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiEditor;
