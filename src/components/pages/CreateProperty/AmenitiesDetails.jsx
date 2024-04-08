import React from "react";
import { Button, Checkbox, Input, RadioButton, StepperComponent } from "../../common";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import { STEPS } from "../../../utils/constants";

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

const furnishedLink = [
  {
    id: "fullFurnished",
    name: "furnished",
    text: "Full-Furnished"
  },
  {
    id: "semiFurnished",
    name: "furnished",
    text: "Semi-Furnished"
  },
  {
    id: "unFurnished",
    name: "furnished",
    text: "Un-Furnished"
  }
];

const bhkLinks = [
  {
    id: "1bhk",
    name: "bhk",
    text: "1 BHK"
  },
  {
    id: "2bhk",
    name: "bhk",
    text: "2 BHK"
  },
  {
    id: "3bhk",
    name: "bhk",
    text: "3 BHK"
  },
  {
    id: "3+bhk",
    name: "bhk",
    text: "3+ BHK"
  }
];

const checkBoxDataResidential = [
  {
    id: "gym",
    name: "gym",
    text: "Gym"
  },
  {
    id: "garden",
    name: "garden",
    text: "Garden"
  },
  {
    id: "swimmingPool",
    name: "swimmingPool",
    text: "Swimming Pool"
  },
  {
    id: "clubHouse",
    name: "clubHouse",
    text: "Club House"
  },
  {
    id: "lift",
    name: "lift",
    text: "Lift"
  },
  {
    id: "cctv",
    name: "cctv",
    text: "CCTV"
  }
];

const checkBoxDataCommercial = [
  {
    id: "lift",
    name: "lift",
    text: "Lift"
  },
  {
    id: "cctv",
    name: "cctv",
    text: "CCTV"
  },
  {
    id: "fireSafety",
    name: "fireSafety",
    text: "Fire Safety"
  },
  {
    id: "waterStorage",
    name: "waterStorage",
    text: "Water Storage"
  },
  {
    id: "cafeteria",
    name: "cafeteria",
    text: "Cafeteria"
  },
  {
    id: "receptionArea",
    name: "receptionArea",
    text: "Reception Area"
  }
];

const checkBoxDataLand = [
  {
    id: "powerBackup",
    name: "powerBackup",
    text: "Power Backup"
  },
  {
    id: "waterStorage",
    name: "waterStorage",
    text: "Water Storage"
  },
  {
    id: "farmHouse",
    name: "farmHouse",
    text: "Farm House"
  }
];

const amenitiesDetailsSchemaForResidential = yup.object({
  parking: yup.number().required("*required").positive("*Enter valid number of parkings"),
  school: yup.number().required("*required").positive("*Enter valid distance for school"),
  hospital: yup.number().required("*required").positive("*Enter valid distance for hospital"),
  bus: yup.number().required("*required").positive("*Enter valid distance for bus stand"),
  shopppingMarket: yup.number().required("*required").positive("*Enter valid distance for Shopping market"),
  furnished: yup.string().required("*required").oneOf(["Full-Furnished", "Semi-Furnished", "Un-Furnished"]),
  bhk: yup.string().required("*required").oneOf(["1 BHK", "2 BHK", "3 BHK", "3+ BHK"])
});

const amenitiesDetailsSchema = yup.object({
  parking: yup.number().required("*required").positive("*Enter valid number of parkings"),
  school: yup.number().required("*required").positive("*Enter valid distance for school"),
  hospital: yup.number().required("*required").positive("*Enter valid distance for hospital"),
  bus: yup.number().required("*required").positive("*Enter valid distance for bus stand"),
  shopppingMarket: yup.number().required("*required").positive("*Enter valid distance for Shopping market")
});

const AmenitiesDetails = ({ data, nextStep, prevStep }) => {
  const generateNewObj = (values) => {
    let newObj;
    if (data.propertyType === "residential") {
      newObj = {
        ...data,
        facing: values.facing,
        parking: values.parking,
        nearByPlaces: {
          school: values.school,
          hospital: values.hospital,
          bus: values.bus,
          shopppingMarket: values.shopppingMarket
        },
        amenitiesForResidential: {
          lift: values.lift,
          cctv: values.cctv,
          gym: values.gym,
          garden: values.garden,
          swimmingPool: values.swimmingPool,
          clubHouse: values.clubHouse
        },
        furnished: values.furnished,
        bhk: values.bhk
      };
    } else if (data.propertyType === "commercial") {
      newObj = {
        ...data,
        facing: values.facing,
        parking: values.parking,
        nearByPlaces: {
          school: values.school,
          hospital: values.hospital,
          bus: values.bus,
          shopppingMarket: values.shopppingMarket
        },
        amenitiesForCommercial: {
          lift: values.lift,
          cctv: values.cctv,
          powerBackup: values.powerBackup,
          fireSafety: values.fireSafety,
          waterStorage: values.waterStorage,
          cafeteria: values.cafeteria,
          receptionArea: values.receptionArea
        }
      };
    } else {
      newObj = {
        ...data,
        facing: values.facing,
        parking: values.parking,
        nearByPlaces: {
          school: values.school,
          hospital: values.hospital,
          bus: values.bus,
          shopppingMarket: values.shopppingMarket
        },
        amenitiesForLand: {
          powerBackup: values.powerBackup,
          waterStorage: values.waterStorage,
          farmHouse: values.farmHouse
        }
      };
    }

    return newObj;
  };

  const handleSubmit = (values) => {
    const newObj = generateNewObj(values);
    nextStep(newObj);
  };

  return (
    <div>
      <StepperComponent steps={STEPS} activeStep={2} />

      <Formik
        initialValues={{
          facing: data.facing,
          parking: data.parking,
          school: data.nearByPlaces.school,
          hospital: data.nearByPlaces.hospital,
          bus: data.nearByPlaces.bus,
          shopppingMarket: data.nearByPlaces.shopppingMarket,
          furnished: data.furnished,
          bhk: data.bhk,
          gym: data.amenitiesForResidential.gym,
          garden: data.amenitiesForResidential.garden,
          swimmingPool: data.amenitiesForResidential.swimmingPool,
          clubHouse: data.amenitiesForResidential.clubHouse,
          lift: data.amenitiesForResidential?.lift || data.amenitiesForCommercial?.lift,
          cctv: data.amenitiesForResidential?.cctv || data.amenitiesForCommercial?.cctv,
          powerBackup: data.amenitiesForCommercial?.powerBackup || data.amenitiesForResidential?.powerBackup,
          fireSafety: data.amenitiesForCommercial.fireSafety,
          waterStorage: data.amenitiesForCommercial?.waterStorage || data.amenitiesForResidential?.waterStorage,
          cafeteria: data.amenitiesForCommercial.cafeteria,
          receptionArea: data.amenitiesForCommercial.receptionArea,
          farmHouse: data.amenitiesForLand.farmHouse
        }}
        onSubmit={handleSubmit}
        validationSchema={data.propertyType === "residential" ? amenitiesDetailsSchemaForResidential : amenitiesDetailsSchema}>
        {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched, setFieldValue }) => (
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

                {data.propertyType === "residential" && (
                  <div className="flex flex-col justify-start gap-2">
                    <p className="font-semibold text-md">BHK :</p>
                    <div>
                      <RadioButton radioButtonData={bhkLinks} value={values.bhk} handleChange={handleChange} />
                      {touched.bhk && errors.bhk ? (
                        <p className="text-[14px] text-danger">{errors.bhk}</p>
                      ) : (
                        <p className="text-[14px] opacity-0">*</p>
                      )}
                    </div>
                  </div>
                )}

                {data.propertyType === "residential" && (
                  <div className="flex flex-col justify-start gap-2">
                    <p className="font-semibold text-md">Furnished Status :</p>
                    <div>
                      <RadioButton radioButtonData={furnishedLink} value={values.furnished} handleChange={handleChange} />
                      {touched.furnished && errors.furnished ? (
                        <p className="text-[14px] text-danger">{errors.furnished}</p>
                      ) : (
                        <p className="text-[14px] opacity-0">*</p>
                      )}
                    </div>
                  </div>
                )}

                {(data.propertyType === "residential" || data.propertyType === "commercial" || data.propertyType === "land") && (
                  <>
                    <p className="font-semibold text-md">Amenities for {data.propertyType}</p>
                    <Checkbox
                      checkBoxData={
                        data.propertyType === "residential"
                          ? checkBoxDataResidential
                          : data.propertyType === "commercial"
                          ? checkBoxDataCommercial
                          : checkBoxDataLand
                      }
                    />
                  </>
                )}

                <div className="flex justify-between mt-5">
                  <Button variant="danger" type="reset">
                    Reset
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        const newObj = generateNewObj(values);
                        prevStep(newObj);
                      }}>
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
