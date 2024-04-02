import { Formik } from "formik";
import React from "react";
import { Input } from "../../common";

const RegisterBuilder = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          cpassword: "",
          phNo: "",
          reraId: "",
          panNo: "",
          address: {
            officeNo: "",
            officeName: "",
            additionalInfo: "",
            city: "",
            state: "",
            country: ""
          }
        }}>
        {() => (
          <div className="flex justify-center items-center mt-3">
            <Input id="name" name="name" placeholder="Enter name" labelText="Login" />
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterBuilder;
