import React, { useState } from "react";
import PropTypes from "prop-types";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Input = ({
  id,
  name,
  type = "text",
  value,
  placeholder,
  className = "",
  onChange,
  onBlur,
  autoComplete,
  readOnly,
  autoFocus,
  labelText,
  touched,
  error,
  ...props
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`relative block rounded-md border border-gray-300 shadow focus-within:border-primary focus-within:ring-1 focus-within:ring-primary z-0 ${className}`}>
        {type !== "textarea" ? (
          <input
            type={type === "password" ? (showPass ? "text" : "password") : type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete={autoComplete}
            readOnly={readOnly}
            autoFocus={autoFocus}
            className={`peer border-none bg-transparent px-4 py-2 placeholder-transparent focus:placeholder-secondary focus:border-transparent focus:outline-none focus:ring-0 w-[min(24rem,85vw)] ${className}`}
            {...props}
          />
        ) : (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            readOnly={readOnly}
            autoFocus={autoFocus}
            rows={2}
            className={`peer border-none bg-transparent px-4 py-2 placeholder-transparent focus:placeholder-secondary focus:border-transparent focus:outline-none focus:ring-0 w-[min(24rem,85vw)] ${className}`}
            {...props}></textarea>
        )}

        <span className="pointer-events-none text-sm absolute start-2.5 top-0 -translate-y-1/2 text-secondary transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm bg-white peer-focus:text-primary ">
          {labelText}
        </span>
      </label>

      {type === "password" && (
        <div className={`absolute right-2 top-0 translate-y-1/2 text-xl bg-transparent`}>
          {!showPass ? (
            <GoEye className="cursor-pointer" onClick={() => setShowPass(!showPass)} />
          ) : (
            <GoEyeClosed className="cursor-pointer" onClick={() => setShowPass(!showPass)} />
          )}
        </div>
      )}

      {touched && error ? <p className="text-[14px] text-danger">{error}</p> : <p className="text-[14px] opacity-0">*</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string
};

export default Input;
