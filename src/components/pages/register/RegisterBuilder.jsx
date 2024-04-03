import { Form, Formik, useFormik } from "formik";
import React from "react";
import { Button, Input } from "../../common";
import * as yup from "yup";

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
const phNoRules = /^[6-9]\d{9}$/;
const reraIdRules = /^[A-Za-z]{6}[0-9]{5}$/;
const panNoRules = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;

const builderSchema = yup.object({
  name: yup
    .string()
    .required("*required")
    .min(2, "*Name must contain atleast 2 characters")
    .max(15, "*Name must not contain more than 15 characters")
    .trim(),
  email: yup.string().required("*required").email("*Email is not valid").trim(),
  phNo: yup.string().required("*required").matches(phNoRules, "*Phone No. is not valid"),
  reraId: yup.string().required("*required").matches(reraIdRules, "*RERA Id is not valid"),
  panNo: yup.string().required("*required").matches(panNoRules, "*PAN No. is not valid"),
  password: yup
    .string()
    .required("*required")
    .matches(passwordRules, "*Password must contain 1 UpperCase, 1 Lowercase, 1 special characters and 1 number"),
  cpassword: yup
    .string()
    .required("*required")
    .oneOf([yup.ref("password")], "*Passwords must match")
});

const RegisterBuilder = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

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
        }}
        onSubmit={handleSubmit}
        validationSchema={builderSchema}>
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <span className="text-black font-bold text-3xl pb-3">Register Builder</span>
            <div className="flex justify-center items-center lg:gap-24">
              <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  labelText="Name"
                  placeholder="Dhruv Prajapati"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.name}
                  error={errors?.name}
                />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  labelText="Email"
                  placeholder="dhruv@example.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.email}
                  error={errors?.email}
                />

                <Input
                  id="phNo"
                  name="phNo"
                  type="number"
                  value={values.phNo}
                  labelText="Phone No."
                  placeholder="1234567890"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.phNo}
                  error={errors?.phNo}
                />

                <Input
                  id="reraId"
                  name="reraId"
                  value={values.reraId}
                  labelText="RERA Id"
                  placeholder="RERAGJ12345"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.reraId}
                  error={errors?.reraId}
                />

                <Input
                  id="panNo"
                  name="panNo"
                  value={values.panNo}
                  labelText="PAN No."
                  placeholder="ABCPD1234F"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.panNo}
                  error={errors?.panNo}
                />

                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  labelText="Password"
                  placeholder="Example@123"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.password}
                  error={errors?.password}
                />
                <Input
                  id="cpassword"
                  name="cpassword"
                  type="password"
                  value={values.cpassword}
                  labelText="Confirm Password"
                  placeholder="Example@123"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.cpassword}
                  error={errors?.cpassword}
                />
                <div className="flex gap-5">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="danger" type="reset">
                    Reset
                  </Button>
                </div>
              </Form>
              <div className="hidden lg:block">
                <img src="/images/loginRegister.gif" alt="" />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegisterBuilder;
