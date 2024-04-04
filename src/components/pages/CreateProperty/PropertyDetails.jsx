import React from "react";
import { Button, Input, RadioButton, StepperComponent } from "../../common";
import { Form, Formik } from "formik";
import * as yup from "yup";

const propertyDetailSchema = yup.object({
  name: yup
    .string()
    .required("*required")
    .min(5, "*Property name must contain atleast 5 characters")
    .max(25, "*Property name must not contain more than 25 characters"),
  description: yup.string().required("*required").min(8, "*Description must contain atleast 8 characters"),
  streetNo: yup.string().required("*required"),
  addressLine: yup.string().required("*required"),
  city: yup.string().required("*required"),
  state: yup.string().required("*required"),
  sqFt: yup.number().required("*required").min(50, "*Sq. ft must be of atleast 50 sq. ft")
});

const PropertyDetails = ({ data, nextStep, prevStep }) => {
  const handleSubmit = (values) => {
    const valObj = {
      ...data,
      name: values.name,
      description: values.description,
      address: {
        streetNo: values.streetNo,
        addressLine: values.addressLine,
        city: values.city,
        state: values.state
      },
      sqFt: values.sqFt
    };
    nextStep(valObj);
  };
  return (
    <div>
      <StepperComponent activeStep={1} />

      <Formik
        initialValues={{
          name: data.name,
          description: data.description,
          streetNo: data.address.streetNo,
          addressLine: data.address.addressLine,
          city: data.address.city,
          state: data.address.state,
          sqFt: data.sqFt
        }}
        onSubmit={handleSubmit}
        // validationSchema={propertyDetailSchema}
      >
        {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <div className="flex justify-center items-center lg:gap-24">
              <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  labelText="Property name"
                  placeholder="Dhruv Skyline"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.name}
                  error={errors?.name}
                />

                <Input
                  type="textarea"
                  id="description"
                  name="description"
                  labelText="Description"
                  value={values.description}
                  placeholder={`This property is under ${data?.lookingFor === "rent" ? "rent" : "sell"}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.description}
                  touched={touched.description}
                />

                <div className="flex justify-between gap-2 max-w-96">
                  <Input
                    id="streetNo"
                    name="streetNo"
                    value={values.streetNo}
                    labelText="Street No."
                    placeholder="25/A"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched?.streetNo}
                    error={errors?.streetNo}
                    className="w-[min(150px,6rem)]"
                  />
                  <Input
                    id="addressLine"
                    name="addressLine"
                    value={values.addressLine}
                    labelText="Address"
                    placeholder="Shrinagar society"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched?.addressLine}
                    error={errors?.addressLine}
                    className="w-[min(300px,16rem)]"
                  />
                </div>

                <div className="flex justify-between gap-2 max-w-96">
                  <Input
                    id="city"
                    name="city"
                    value={values.city}
                    labelText="City"
                    placeholder="Visnagar"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched?.city}
                    error={errors?.city}
                    className="w-[min(160px,12rem)]"
                  />

                  <Input
                    id="state"
                    name="state"
                    value={values.state}
                    labelText="State"
                    placeholder="Gujarat"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched?.state}
                    error={errors?.state}
                    className="w-[max(160px,12rem)]"
                  />
                </div>

                <Input
                  id="sqFt"
                  name="sqFt"
                  type="number"
                  value={values.sqFt}
                  labelText="Square Feet"
                  placeholder="850"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.sqFt}
                  error={errors?.sqFt}
                />

                <div className="flex justify-between">
                  <Button variant="danger" type="reset">
                    Reset
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={() =>
                        prevStep({
                          ...data,
                          name: values.name,
                          description: values.description,
                          address: {
                            streetNo: values.streetNo,
                            addressLine: values.addressLine,
                            city: values.city,
                            state: values.state
                          },
                          sqFt: values.sqFt
                        })
                      }>
                      Back
                    </Button>

                    <Button variant="primary" type="submit">
                      Next
                    </Button>
                  </div>
                </div>
              </Form>
              <div className="hidden lg:block">
                <img src="/images/PropertyDetail.gif" alt="" />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default PropertyDetails;
