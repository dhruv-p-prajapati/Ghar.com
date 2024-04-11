import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Button, HelmetHeader, Input } from "../../common";
import { setRole } from "../../../redux/actions/roleAction";
import { toast } from "react-toastify";
import { findBuilder, findUser } from "../../../utils/axiosGloableInstance";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginSchema } from "../../../utils/ValidationSchemas";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, user, builder, admin } = useSelector((state) => state.role);

  const handleSubmit = async (values, { resetForm }) => {
    const { role, email, password } = values;

    if (role === "user") {
      let { data: user } = await findUser(email);

      if (user && user[0]?.password === password) {
        dispatch(setRole(role, user[0]));
        toast.success(`${user[0]?.name} logged in successfully`);
        navigate("/");
      } else {
        toast.error("Invalid credential !!");
      }
    }

    if (role === "builder") {
      let { data: builder } = await findBuilder(email);

      if (builder && builder[0]?.password === password) {
        dispatch(setRole(role, builder[0]));
        toast.success(`${builder[0].name} logged in successfully`);
        // navigate("/builder/home");
      } else {
        toast.error("Invalid credential !!");
      }
    }

    if (role === "admin") {
      const admin = { email, password };
      if (email === "admin@gmail.com" && password === "Admin@123") {
        dispatch(setRole(role, admin));
        toast.success("Admin logged in successfully!");
        // navigate("/admin");
      } else {
        toast.error("Invalid credential !!");
      }
    }

    resetForm();
  };

  useEffect(() => {
    user ? navigate("/user") : builder ? navigate("/builder") : admin ? navigate("/admin") : null;
  });

  return (
    <>
      <HelmetHeader title="Login" />
      <Formik
        initialValues={{
          role: "user",
          email: "",
          password: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}>
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched }) => (
          <div className="flex justify-center flex-col gap-5 items-center mt-10 sm:px-[5rem]">
            <span className="text-black font-bold text-3xl">Login</span>
            <div className="flex justify-center items-center lg:gap-24">
              <Form className="flex flex-col gap-2">
                <select
                  name="role"
                  id="role"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.role}
                  className="border border-gray-300 shadow outline-0 rounded-md mt-1 px-2 py-1 h-11 w-[min(24rem,85vw)] focus:border-black">
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="builder">Builder</option>
                </select>
                {touched.role && errors.role ? <p className="text-[14px] text-red-700">{errors.role}</p> : <p className="text-[14px] opacity-0">*</p>}

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
                    Don't have an account?{" "}
                    <NavLink to="/user/register" className="text-primary">
                      Register here
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

export default Login;
