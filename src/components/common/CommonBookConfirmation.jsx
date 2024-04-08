import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
import Input from "./Input";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { setRole } from "../../redux/actions/roleAction";

const CommonBookConfirmation = ({ showBookConfirmation, setShowBookConfirmation, bookProperty, user, builder, property }) => {
  const dispatch = useDispatch();

  const bookPropertySchema = yup.object({
    amountPaid: yup
      .number()
      .required("*required")
      .min(property.tokenAmount, "*Amount must be grater than or equal to token price")
      .max(user.amount, "*Amount must be smaller than or equal to you bank balance")
  });

  const handleSubmit = async (values) => {
    setShowBookConfirmation(!showBookConfirmation);
    const amountPaid = values.amountPaid;
    const userObj = await bookProperty(user, builder, property, amountPaid);
    if (userObj) {
      dispatch(setRole("user", userObj));
    }
  };
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-screen h-screen z-50 bg-[rgba(0,0,0,0.2)]">
      <div className="z-50 bg-slate-50 px-5 py-5 w-[min(90%,450px)] rounded-md relative">
        <button className="absolute top-3 right-3 text-2xl" onClick={() => setShowBookConfirmation(!showBookConfirmation)}>
          <AiOutlineClose />
        </button>
        <h2 className="text-2xl font-medium">Book Property</h2>
        <hr className="h-2 mt-3" />

        <div className="mt-2 mb-6 flex flex-col gap-1 text-sm">
          <p>Your Current bank balance - {user.amount}</p>
          <p className={`${parseFloat(user.amount) < parseFloat(property.tokenAmount) ? "text-danger" : ""}`}>
            Required token Amount - {property?.tokenAmount}
          </p>
        </div>
        <div className="text-base">
          <Formik
            initialValues={{
              amountPaid: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={bookPropertySchema}>
            {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
              <Form onSubmit={handleSubmit}>
                {parseFloat(user.amount) >= parseFloat(property.tokenAmount) ? (
                  <div className="mt-6 mb-2">
                    <Input
                      id="amountPaid"
                      name="amountPaid"
                      type="number"
                      value={values.amountPaid}
                      placeholder="Enter Token Amount"
                      labelText="Amount"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.amountPaid}
                      error={errors?.amountPaid}
                      className="w-[min(24rem,85vw)]"
                    />
                  </div>
                ) : (
                  <div className="my-8 text-danger">
                    <h2 className="text-base font-semibold mb-1">Insufficient funds to book the {property.name}</h2>
                    <p>Please add funds to your account to proceed with the booking.</p>
                  </div>
                )}
                {parseFloat(user.amount) >= parseFloat(property.tokenAmount) && (
                  <p className={`text-base font-medium mb-4 rounded-md text-secondary`}>Are you sure want to book {property.name} ?</p>
                )}
                <div className="flex w-full mx-auto justify-end gap-5">
                  <Button variant="secondaryOutline" onClick={() => setShowBookConfirmation(!showBookConfirmation)}>
                    Back
                  </Button>
                  {parseFloat(user.amount) >= parseFloat(property.tokenAmount) ? (
                    <Button type="submit">Book Now</Button>
                  ) : (
                    <Button type="submit">Add funds</Button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CommonBookConfirmation;
