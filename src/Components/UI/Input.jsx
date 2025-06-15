import React from "react";

function Input({type, name, value, placeholder, label, ...props}) {
  const inputClassName = `block w-full rounded-md border border-grey-600 bg-grey-700/75 p-2 text-sm text-grey-100
  shadow-md shadow-grey-800 outline-none focus:border-2 focus:border-primary-500 focus:bg-grey-700 md:text-base 2xl:p-2.5
  `;
  const InputEL = () => {
    return (
      <div>
        <input
          type={type ?? "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          {...props}
          className={inputClassName}
        />
      </div>
    );
  };
  return <div className={""}>{InputEL()}</div>;
}

export default Input;
