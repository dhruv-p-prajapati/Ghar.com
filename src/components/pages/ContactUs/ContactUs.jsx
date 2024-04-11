import React from "react";
import { Button, HelmetHeader, Input } from "../../common";
import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { registerQuery } from "../../../utils/axiosGloableInstance";
import { toast } from "react-toastify";
import { contactSchema } from "../../../utils/ValidationSchemas";

const ContactUs = () => {
  const { user, builder } = useSelector((state) => state.role);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const queryObj = { ...values };
      const { success, error } = await registerQuery(queryObj);
      if (success) {
        toast.success("Query Registered Successfully");
        resetForm();
      } else {
        console.log("Failed to register query", error);
        toast.error("Problem for submitting query, Please try after some time!");
      }
    } catch (error) {
      console.log("Failed to register query", error);
    }
  };
  return (
    <>
      <HelmetHeader title="Contact Us" />
      <Formik
        initialValues={{
          name: user?.name || builder?.name || "",
          email: user?.email || builder?.email || "",
          phNo: user?.phNo || builder?.phNo || "",
          description: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}>
        {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <span className="text-secondary font-bold text-3xl pb-3">Contact Us</span>
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
                  type="textarea"
                  id="description"
                  name="description"
                  labelText="Description"
                  value={values.description}
                  placeholder="Enter Description here..."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.description}
                  touched={touched.description}
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
    </>
  );
};

export default ContactUs;
