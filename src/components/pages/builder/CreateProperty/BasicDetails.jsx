import React from "react";
import { MdSell } from "react-icons/md";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, HelmetHeader, Input, RadioButton, StepperComponent } from "../../../common";

const lookingFor = [
  {
    id: "rent",
    name: "lookingFor",
    text: "Rent",
    icon: <MdSell />
  },
  {
    id: "sell",
    name: "lookingFor",
    text: "Sell",
    icon: <MdSell />
  }
];

const categoriesLinks = [];

const phNoRules = /^[6-9]\d{9}$/;
const basicDetailSchema = yup.object({
  lookingFor: yup.string().required("*required"),
  propertyType: yup.string().required("*required"),
  phNo: yup.string().required("*required").matches(phNoRules, "*Phone No. is not valid")
});

const BasicDetails = ({ data, setData, nextStep, categories, property }) => {
  categories?.map((category) => {
    const categoryExists = categoriesLinks?.findIndex((currCategory) => currCategory?.id === category?.propertyType);
    if (categoryExists === -1) {
      const newCategoryObj = {
        id: category?.propertyType,
        name: "propertyType",
        text: category?.propertyType
      };
      categoriesLinks.push(newCategoryObj);
    }
  });

  const handleSubmit = (values) => {
    nextStep(values);
  };

  return (
    <>
      <HelmetHeader title="Basic Details" />
      <StepperComponent activeStep={0} />
      <Formik
        initialValues={{
          lookingFor: data?.lookingFor,
          propertyType: data?.propertyType,
          phNo: data?.phNo
        }}
        onSubmit={handleSubmit}
        validationSchema={basicDetailSchema}>
        {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <div className="flex justify-center items-center lg:gap-24">
              <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <div className="text-xl mb-8 font-bold text-secondary">
                  New to <span className="text-primary font-bold">Ghar.com</span> Let’s get you started.
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <p className="font-semibold text-md">Property type :</p>
                  <div>
                    <RadioButton radioButtonData={categoriesLinks} value={values.propertyType} handleChange={handleChange} />
                    {touched.propertyType && errors.propertyType ? (
                      <p className="text-[14px] text-danger">{errors.propertyType}</p>
                    ) : (
                      <p className="text-[14px] opacity-0">*</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-start gap-2 mb-5">
                  <p className="font-semibold text-md">Looking For :</p>
                  <div>
                    <RadioButton radioButtonData={lookingFor} value={values.lookingFor} handleChange={handleChange} />
                    {touched.lookingFor && errors.lookingFor ? (
                      <p className="text-[14px] text-danger">{errors.lookingFor}</p>
                    ) : (
                      <p className="text-[14px] opacity-0">*</p>
                    )}
                  </div>
                </div>

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

                <div className="flex justify-between">
                  <Button variant="danger" type="reset">
                    Reset
                  </Button>
                  <Button variant="primary" type="submit">
                    Next
                  </Button>
                </div>
              </Form>
              <div className="hidden lg:block">
                <img src="/images/BasicDetails.gif" alt="" />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default BasicDetails;
