import React from "react";
import { Form, Formik } from "formik";
import { Button, HelmetHeader, Input, RadioButton, StepperComponent } from "../../../common";
import { pricingDetailsSchema } from "../../../../utils/ValidationSchemas";
import { constructionStatusLinks, negotiableLinks } from "../../../../utils/RadioButtonsLinks";

const PricingDetails = ({ data, prevStep, nextStep, handleSubmitProperty, isUpdate = false }) => {
  const handleSubmit = (values) => {
    const newObj = {
      ...data,
      price: values.price,
      tokenAmount: values.tokenAmount,
      image: values.image,
      negotiable: values.negotiable,
      constructionStatus: values.constructionStatus
    };

    nextStep(newObj);

    handleSubmitProperty(values);
  };
  return (
    <>
      <HelmetHeader title="Pricing Details" />
      <StepperComponent activeStep={3} />

      <Formik
        initialValues={{
          price: data.price,
          tokenAmount: data.tokenAmount,
          image: data.image,
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

                <Input
                  id="image"
                  name="image"
                  value={values.image}
                  labelText="Image URL"
                  placeholder="Enter image url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.image}
                  error={errors?.image}
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
                          image: values.image,
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
    </>
  );
};

export default PricingDetails;
