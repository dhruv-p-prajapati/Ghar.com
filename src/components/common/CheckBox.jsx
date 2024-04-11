import PropTypes from "prop-types";
import { Field } from "formik";

const CheckBox = ({ checkBoxData = [] }) => {
  return (
    <div className="flex justify-start gap-x-3 gap-y-2 w-96 flex-wrap">
      {checkBoxData &&
        checkBoxData.map((checkbox) => {
          return (
            <div key={checkbox.name}>
              <label
                htmlFor={checkbox.id}
                className={`block cursor-pointer rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium shadow text-gray-600 hover:border-gray-20 has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white has-[:checked]:ring-1 has-[:checked]:shadow-primary has-[:checked]:ring-primary has-[:checked]:shadow-md`}>
                <div className="flex justify-between items-center gap-1">
                  {checkbox?.icon}
                  <p className="text-center">{checkbox.text}</p>
                </div>
                <div className="sr-only">
                  <Field type="checkbox" name={checkbox.name} id={checkbox.id} />
                </div>
              </label>
            </div>
          );
        })}
    </div>
  );
};

CheckBox.propTypes = {
  checkBoxData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.element
    })
  ).isRequired
};

export default CheckBox;
