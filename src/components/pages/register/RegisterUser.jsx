import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, HelmetHeader, Input } from "../../common";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBuilders, getUsers, registerUser } from "../../../utils/axiosGloableInstance";
import { setLoader } from "../../../redux/actions/appAction";
import { setRole } from "../../../redux/actions/roleAction";
import { toast } from "react-toastify";
import { userSchema } from "../../../utils/ValidationSchemas";

const RegisterUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth, user, builder, admin } = useSelector((state) => state.role);

  const [users, setUsers] = useState([]);
  const [builders, setBuilders] = useState([]);

  const handleSubmit = async (values, { resetForm }) => {
    const { name, email, phNo, amount, password } = values;

    const emailExistsInUsers = users.findIndex((user) => user.email === email);
    const emailExistsInBuilders = builders.findIndex((builder) => builder.email === email);

    if (emailExistsInUsers === -1 && emailExistsInBuilders === -1) {
      let userObj = {
        id: users.length !== 0 ? (parseInt(users[users.length - 1].id) + 1).toString() : "1",
        name: name.trim(),
        email: email.trim(),
        phNo,
        amount,
        password,
        favouriteProperties: []
      };

      try {
        dispatch(setLoader(true));

        const { success, error } = await registerUser(userObj);

        if (success) {
          toast.success("User registered successfully");
          dispatch(setRole("user", userObj));
          resetForm();
          navigate("/");
        } else {
          console.log("Failed to register User ", error);
          toast.error("Problem for registering User, Please try after some time!");
          resetForm();
        }
      } catch (error) {
        console.log("Failed to register User ", error);
      } finally {
        dispatch(setLoader(false));
      }
    } else {
      toast.error("User already exists!!");
      resetForm();
    }
  };

  const fetchData = async () => {
    const { data: usersData, error: usersError } = await getUsers();
    const { data: buildersData, error: buildersError } = await getBuilders();

    setUsers(usersData);
    setBuilders(buildersData);
  };

  useEffect(() => {
    user ? navigate("/user") : builder ? navigate("/builder") : admin ? navigate("/admin") : null;

    fetchData();
  }, []);

  return (
    <>
      <HelmetHeader title="Register | User" />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          cpassword: "",
          phNo: "",
          amount: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={userSchema}>
        {({ handleSubmit, handleChange, handleBlur, handleReset, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <span className="text-secondary font-bold text-3xl pb-3">Register User</span>
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
    </>
  );
};

export default RegisterUser;
