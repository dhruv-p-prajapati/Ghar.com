import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

const CheckBox = ({ checkBoxData = [] }) => {
  return (
    <div className="flex justify-start gap-5 w-96 flex-wrap">
      {checkBoxData &&
        checkBoxData.map((checkbox) => {
          return (
            <div key={checkbox.name}>
              <label
                htmlFor={checkbox.id}
                className={`block cursor-pointer rounded-lg border border-gray-300 bg-white py-2 px-4 text-lg font-medium shadow text-gray-600 hover:border-gray-20 has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:ring-1 has-[:checked]:shadow-primary has-[:checked]:ring-primary has-[:checked]:shadow-md`}>
                <div className="flex justify-between items-center gap-1">
                  {checkbox?.icon}
                  <p className="text-center">{checkbox.text}</p>
                </div>
                <Field name={checkbox.name} render={() => <input id={checkbox.id} type="checkbox" className="sr-only" />} />
              </label>
            </div>
          );
        })}
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CheckBox;
