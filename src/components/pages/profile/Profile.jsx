import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "../../common";
import { updateBuilder, updateUser } from "../../../utils/axiosGloableInstance";
import { setRole } from "../../../redux/actions/roleAction";
import { toast } from "react-toastify";
import * as yup from "yup";

const profileSchema = yup.object({
  name: yup
    .string()
    .required("*required")
    .min(2, "*Name must contain atleast 2 characters")
    .max(15, "*Name must not contain more than 15 characters")
    .trim(),
  email: yup.string().required("*required").email("*Email is not valid").trim(),
  amount: yup.number().min(0, "*Enter valid amount").max(50000, "*Enter amount less than 50,000")
});

const Profile = () => {
  const dispatch = useDispatch();
  const { user, builder } = useSelector((state) => state.role);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = async (values) => {
    try {
      if (user !== null) {
        const userObj = {
          ...user,
          name: values.name.trim(),
          email: values.email.trim(),
          amount: values.amount
        };

        const { success, error } = await updateUser(user.id, userObj);
        if (success) {
          dispatch(setRole("user", userObj));
          toast.success("User updated successfully!");
        } else {
          console.log("Failed to update user " + error);
          toast.error("Problem for updating user, Please try after some time!");
        }
      } else {
        const builderObj = {
          ...builder,
          name: values.name.trim(),
          email: values.email.trim(),
          amount: values.amount
        };

        const { success, error } = await updateBuilder(builder.id, builderObj);
        if (success) {
          dispatch(setRole("builder", builderObj));
          toast.success("Builder updated successfully!");
        } else {
          console.log("Failed to update builder " + error);
          toast.error("Problem for updating builder, Please try after some time!");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: user?.name || builder?.name,
        email: user?.email || builder?.email,
        amount: user?.amount || builder?.amount
      }}
      onSubmit={handleSubmit}
      validationSchema={profileSchema}>
      {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched, dirty }) => (
        <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
          <span className="text-secondary font-bold text-3xl pb-3">Update {user !== null ? "User" : "Builder"}</span>
          <div className="flex justify-center items-center lg:gap-24">
            <Form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              {isEditing ? (
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
              ) : (
                <div className="my-2 w-[min(24rem,85vw)]">
                  Name - <span>{values.name}</span>
                </div>
              )}

              {isEditing ? (
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
              ) : (
                <div className="my-2 w-[min(24rem,85vw)]">
                  Email - <span>{values.email}</span>
                </div>
              )}

              {isEditing ? (
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  value={values.amount}
                  labelText="Amount"
                  placeholder="15000"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched?.amount}
                  error={errors?.amount}
                />
              ) : (
                <div className="my-2 w-[min(24rem,85vw)]">
                  Amount - <span>{values.amount}</span>
                </div>
              )}

              {!isEditing && (
                <div className="my-2 w-[min(24rem,85vw)]">
                  Phone No - <span>{user?.phNo || builder?.phNo}</span>
                </div>
              )}

              {!isEditing && builder !== null && (
                <div className="my-2 w-[min(24rem,85vw)]">
                  Phone No - <span>{builder?.reraId}</span>
                </div>
              )}

              {!isEditing && builder !== null && (
                <div className="my-2 w-[min(24rem,85vw)]">
                  Phone No - <span>{builder?.panNo}</span>
                </div>
              )}

              {isEditing ? (
                <div className="flex gap-2 mt-4">
                  <Button onClick={dirty ? handleSubmit : () => {}} variant={dirty ? "primary" : ""}>
                    Update
                  </Button>
                  <Button
                    onClick={() => {
                      handleReset(), setIsEditing(false);
                    }}
                    variant="danger">
                    Cancel
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setIsEditing(true)} variant="primary">
                  Edit
                </Button>
              )}
            </Form>
            <div className="hidden lg:block">
              <img src="/images/loginRegister.gif" alt="" />
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Profile;
