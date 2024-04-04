import React from "react";
import { Button, Input, RadioButton, StepperComponent } from "../../common";
import { STEPS } from "../../../utils/constants";
import { Form, Formik } from "formik";

const facingLink = [
  {
    id: "north",
    name: "facing",
    text: "North"
  },
  {
    id: "east",
    name: "facing",
    text: "East"
  },
  {
    id: "west",
    name: "facing",
    text: "West"
  },
  {
    id: "south",
    name: "facing",
    text: "South"
  }
];

const AmenitiesDetails = ({ data, nextStep, prevStep }) => {
  const handleSubmit = () => {};
  return (
    <div>
      <StepperComponent activeStep={2} />

      <Formik
        initialValues={{
          facing: "",
          parking: "",
          school: "",
          hospital: "",
          bus: "",
          shopppingMarket: "",
          furnished: "",
          bhk: "",
          gym: true,
          garden: true,
          swimmingPool: true,
          clubHouse: true,
          lift: "",
          cctv: "",
          powerBackup: "",
          fireSafety: "",
          waterStorage: "",
          cafeteria: "",
          receptionArea: "",
          width: "",
          length: "",
          farmHouse: ""
        }}
        onSubmit={handleSubmit}>
        {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <div className="flex justify-center items-center lg:gap-24">
              <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-start gap-2">
                  <p className="font-semibold text-md">Facing of property :</p>
                  <div>
                    <RadioButton radioButtonData={facingLink} value={values.facing} handleChange={handleChange} />
                    {touched.facing && errors.facing ? (
                      <p className="text-[14px] text-danger">{errors.facing}</p>
                    ) : (
                      <p className="text-[14px] opacity-0">*</p>
                    )}
                  </div>
                </div>

                <Input
                  id="parking"
                  name="parking"
                  type="number"
                  value={values.parking}
                  labelText="Parking"
                  placeholder="2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.parking}
                  error={errors?.parking}
                />
                {/* school: "",
          hospital: "",
          bus: "",
          shopppingMarket: "", */}

                <p className="font-semibold text-md">Near by property :</p>
                <div className="flex justify-between">
                  <div>
                    <Input
                      id="school"
                      name="school"
                      type="number"
                      value={values.school}
                      labelText="School"
                      placeholder="1 k.m."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.school}
                      error={errors?.school}
                      className="w-[11rem]"
                    />

                    <Input
                      id="hospital"
                      name="hospital"
                      type="number"
                      value={values.hospital}
                      labelText="Hospital"
                      placeholder="2.7 k.m."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.hospital}
                      error={errors?.hospital}
                      className="w-[11rem]"
                    />
                  </div>
                  <div>
                    <Input
                      id="bus"
                      name="bus"
                      type="number"
                      value={values.bus}
                      labelText="Bus Stand"
                      placeholder="0.5 k.m."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.bus}
                      error={errors?.bus}
                      className="w-[11rem]"
                    />
                    <Input
                      id="shopppingMarket"
                      name="shopppingMarket"
                      type="number"
                      value={values.shopppingMarket}
                      labelText="Shopping Market"
                      placeholder="4.7 k.m."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.shopppingMarket}
                      error={errors?.shopppingMarket}
                      className="w-[11rem]"
                    />
                  </div>
                </div>

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

export default AmenitiesDetails;
