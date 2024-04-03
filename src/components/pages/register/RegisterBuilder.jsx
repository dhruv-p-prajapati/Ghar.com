import { Form, Formik, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Input } from "../../common";
import * as yup from "yup";
import { getBuilders, getUsers, registerBuilder } from "../../../utils/axiosGloableInstance";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../../../redux/actions/roleAction";
import { setLoader } from "../../../redux/actions/appAction";

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
  streetNo: yup.string().required("*required"),
  addressLine: yup.string().required("*required"),
  city: yup.string().required("*required"),
  state: yup.string().required("*required"),
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [builders, setBuilders] = useState([]);

  const handleSubmit = async (values, { resetForm }) => {
    const { name, email, phNo, reraId, panNo, password, streetNo, addressLine, city, state } = values;

    const emailExistsInUsers = users.findIndex((user) => user.email === email);
    const emailExistsInBuilders = builders.findIndex((builder) => builder.email === email);

    if (emailExistsInUsers === -1 && emailExistsInBuilders === -1) {
      let builderObj = {
        id: builders.length !== 0 ? (parseInt(builders[builders.length - 1].id) + 1).toString() : "1",
        name: name.trim(),
        email: email.trim(),
        phNo,
        reraId,
        panNo,
        password,
        address: {
          streetNo,
          addressLine,
          city,
          state
        },
        amount: 0,
        listedProperties: []
      };

      try {
        dispatch(setLoader(true));

        const { success, error } = await registerBuilder(builderObj);

        if (success) {
          dispatch(setRole("builder", builderObj));
          resetForm();
          toast.success("Builder registered successfully");
          navigate("/");
        } else {
          console.log("Failed to register builder ", error);
          toast.error("Problem for registering Builder, Please try after some time!");
          resetForm();
        }
      } catch (error) {
        console.log("Failed to register Builder ", error);
      } finally {
        dispatch(setLoader(false));
      }
    } else {
      toast.error("Builder already exists!!");
      resetForm();
    }
  };

  useEffect(() => {
    (async () => {
      const { data: usersData, error: userError } = await getUsers();
      const { data: buildersData, error: buildersError } = await getBuilders();

      setUsers(usersData);
      setBuilders(buildersData);
    })();
  }, []);

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        cpassword: "",
        phNo: "",
        reraId: "",
        panNo: "",
        streetNo: "",
        addressLine: "",
        city: "",
        state: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={builderSchema}>
      {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
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
              <div className="mt-2">
                <p>
                  Already have an account?{" "}
                  <NavLink to="/login" className="text-primary">
                    Login here
                  </NavLink>
                </p>
              </div>
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

export default RegisterBuilder;
