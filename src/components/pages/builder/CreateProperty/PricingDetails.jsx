import React from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Input, RadioButton, StepperComponent } from "../../../common";
import { STEPS } from "../../../../utils/constants";

const negotiableLinks = [
  {
    id: "yes",
    name: "negotiable",
    text: "Yes"
  },
  {
    id: "no",
    name: "negotiable",
    text: "No"
  }
];

const constructionStatusLinks = [
  {
    id: "readyToMove",
    name: "constructionStatus",
    text: "Ready To Move"
  },
  {
    id: "underConstruction",
    name: "constructionStatus",
    text: "Under Construction"
  }
];

const pricingDetailsSchema = yup.object({
  price: yup.number().required("*required").positive("*Enter valid Price"),
  tokenAmount: yup.number().required("*required").positive("*Enter valid token amount"),
  negotiable: yup.string().required("*required"),
  constructionStatus: yup.string().required("*required")
});

const PricingDetails = ({ data, prevStep, nextStep, handleUpdateProperty, isUpdate = false }) => {
  const handleSubmit = (values) => {
    const newObj = {
      ...data,
      price: values.price,
      tokenAmount: values.tokenAmount,
      negotiable: values.negotiable,
      constructionStatus: values.constructionStatus
    };

    nextStep(newObj);

    handleUpdateProperty(values);
  };
  return (
    <div>
      <StepperComponent steps={STEPS} activeStep={3} />

      <Formik
        initialValues={{
          price: data.price,
          tokenAmount: data.tokenAmount,
          negotiable: data.negotiable,
          constructionStatus: data.constructionStatus
        }}
        onSubmit={handleSubmit}
        validationSchema={pricingDetailsSchema}>
        {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <div className="flex justify-center items-center lg:gap-24">
              <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  value={values.price}
                  labelText={`${data.lookingFor === "Rent" ? "Monthly Rent" : "Expected Price"}`}
                  placeholder={`${data.lookingFor === "Rent" ? "12500" : "4000000"}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.price}
                  error={errors?.price}
                />
                <Input
                  id="tokenAmount"
                  name="tokenAmount"
                  type="number"
                  value={values.tokenAmount}
                  labelText="Token Amount"
                  placeholder="50000"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.tokenAmount}
                  error={errors?.tokenAmount}
                />

                <div className="flex flex-col justify-start gap-2">
                  <p className="font-semibold text-md">Negotiable :</p>
                  <div>
                    <RadioButton radioButtonData={negotiableLinks} value={values.negotiable} handleChange={handleChange} />
                    {touched.negotiable && errors.negotiable ? (
                      <p className="text-[14px] text-danger">{errors.negotiable}</p>
                    ) : (
                      <p className="text-[14px] opacity-0">*</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <p className="font-semibold text-md">Construction status :</p>
                  <div>
                    <RadioButton radioButtonData={constructionStatusLinks} value={values.constructionStatus} handleChange={handleChange} />
                    {touched.constructionStatus && errors.constructionStatus ? (
                      <p className="text-[14px] text-danger">{errors.constructionStatus}</p>
                    ) : (
                      <p className="text-[14px] opacity-0">*</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="danger" type="reset">
                    Reset
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        const newObj = {
                          ...data,
                          price: values.price,
                          tokenAmount: values.tokenAmount,
                          negotiable: values.negotiable,
                          constructionStatus: values.constructionStatus
                        };
                        prevStep(newObj);
                      }}>
                      Back
                    </Button>

                    <Button variant="primary" type="submit">
                      {isUpdate ? "Update Property" : "Register Property"}
                    </Button>
                  </div>
                </div>
              </Form>
              <div className="hidden lg:block">
                <img src="/images/Pricing.gif" alt="Pricing Image" />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PricingDetails;
