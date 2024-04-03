import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ radioButtonData = [] }) => {
  return (
    <>
      {radioButtonData &&
        radioButtonData.map((link) => {
          return (
            <div key={link.id}>
              <label
                htmlFor={link.id}
                className="block cursor-pointer rounded-lg border border-gray-300 bg-white py-2 px-4 text-lg font-medium shadow hover:border-gray-200 has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:ring-1 has-[:checked]:shadow-primary has-[:checked]:ring-primary has-[:checked]:shadow-md">
                <div className="flex justify-between items-center gap-1">
                  {link?.icon}
                  <p className="w-10 text-center">{link?.text}</p>
                </div>

                <input type="radio" name={link?.name} id={link?.id} className="sr-only" />
              </label>
            </div>
          );
        })}
    </>
  );
};

RadioButton.propTypes = {
  radioButtonData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.element
    })
  ).isRequired
};

export default RadioButton;
