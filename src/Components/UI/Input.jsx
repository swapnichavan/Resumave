import {twMerge} from "tailwind-merge";
function Input({type, name, value, placeholder, label, options, ...props}) {
  console.log(type, props.multipoints);
  // console.log(props);
  const inputClassName = `block w-full rounded-md border border-grey-600 bg-grey-700/75 p-2 text-sm text-grey-100
  shadow-md shadow-grey-800 outline-none focus:border-2 focus:border-primary-500 focus:bg-grey-700 md:text-base 2xl:p-2.5
  `;
  const InputEL = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          {...props}
          className={twMerge(inputClassName, "min-h-56 text-sm md:min-h-40")}>
          {value}
        </textarea>
      );
    }

    if (type === "select") {
      return (
        <select
          {...props}
          placeholder={placeholder}
          name={name}
          id={name}
          defaultValue={value}
          className={inputClassName}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option?.name || option?.value}
            </option>
          ))}
        </select>
      );
    }

    if (type === "color") {
      return (
        <input
          {...props}
          name={name}
          placeholder={placeholder || `Enter ${label}`}
          id={name}
          className={twMerge(inputClassName, "py-1")}
        />
      );
    }

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
  return (
    <div
    // className={`${span ? "md:col-span-2" : ""}`}
    >
      {label && (
        <label
          htmlFor={name}
          className="mb-0.5 block text-xs text-gray-300 md:text-sm 2xl:text-base">
          {label ?? sentenceCase(name)} {props.required && "*"}
        </label>
      )}
      {InputEL()}
    </div>
  );
}

export default Input;
