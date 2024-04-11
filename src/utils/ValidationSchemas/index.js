import * as yup from "yup";

/********************************REGEX */
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
const phNoRules = /^[6-9]\d{9}$/;
const reraIdRules = /^[A-Za-z]{6}[0-9]{5}$/;
const panNoRules = /^[A-Za-z]{5}\d{4}[A-Za-z]{1}$/;

/********************************USER SCHEMA */
export const userSchema = yup.object({
  name: yup
    .string()
    .required("*required")
    .min(2, "*Name must contain atleast 2 characters")
    .max(15, "*Name must not contain more than 15 characters")
    .trim(),
  email: yup.string().required("*required").email("*Email is not valid").trim(),
  phNo: yup.string().required("*required").matches(phNoRules, "*Phone No. is not valid"),
  amount: yup.number().min(0, "*Enter valid amount").max(50000, "*Enter amount less than 50,000"),
  password: yup
    .string()
    .required("*required")
    .matches(passwordRules, "*Password must contain 1 UpperCase, 1 Lowercase, 1 special characters and 1 number"),
  cpassword: yup
    .string()
    .required("*required")
    .oneOf([yup.ref("password")], "*Passwords must match")
});

/********************************BUILDER SCHEMA */
export const builderSchema = yup.object({
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

/********************************PROFILE SCHEMA FOR USER/BUILDER */
export const profileSchema = yup.object({
  name: yup
    .string()
    .required("*required")
    .min(2, "*Name must contain atleast 2 characters")
    .max(15, "*Name must not contain more than 15 characters")
    .trim(),
  email: yup.string().required("*required").email("*Email is not valid").trim(),
  amount: yup.number().min(0, "*Enter valid amount").max(50000, "*Enter amount less than 50,000")
});

/********************************LOGIN SCHEMA */
export const loginSchema = yup.object({
  role: yup.string().required("*required").oneOf(["user", "admin", "builder"], "*Please select a valid role"),
  email: yup.string().required("*required").trim(),
  password: yup.string().required("*required").trim()
});

/********************************PROPERTIES SCHEMA */
export const basicDetailSchema = yup.object({
  lookingFor: yup.string().required("*required"),
  propertyType: yup.string().required("*required"),
  phNo: yup.string().required("*required").matches(phNoRules, "*Phone No. is not valid")
});

export const propertyDetailSchema = yup.object({
  subPropertyType: yup.string().required("*required"),
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

export const amenitiesDetailsSchemaForResidential = yup.object({
  parking: yup.number().required("*required").min(0, "*Enter valid number of parkings"),
  school: yup.number().required("*required").positive("*Enter valid distance"),
  hospital: yup.number().required("*required").positive("*Enter valid distance"),
  bus: yup.number().required("*required").positive("*Enter valid distance"),
  shopppingMarket: yup.number().required("*required").positive("*Enter valid distance"),
  furnished: yup.string().required("*required").oneOf(["Full-Furnished", "Semi-Furnished", "Un-Furnished"]),
  bhk: yup.string().required("*required").oneOf(["1 BHK", "2 BHK", "3 BHK", "3+ BHK"])
});

export const amenitiesDetailsSchema = yup.object({
  parking: yup.number().required("*required").min(0, "*Enter valid number of parkings"),
  school: yup.number().required("*required").positive("*Enter valid distance"),
  hospital: yup.number().required("*required").positive("*Enter valid distance"),
  bus: yup.number().required("*required").positive("*Enter valid distance"),
  shopppingMarket: yup.number().required("*required").positive("*Enter valid distance")
});

export const pricingDetailsSchema = yup.object({
  price: yup.number().required("*required").positive("*Enter valid Price"),
  tokenAmount: yup.number().required("*required").positive("*Enter valid token amount"),
  image: yup.string().required("*required"),
  negotiable: yup.string().required("*required"),
  constructionStatus: yup.string().required("*required")
});

/********************************CONTACT SCHEMA */
export const contactSchema = yup.object({
  name: yup
    .string()
    .required("*required")
    .min(5, "*Property name must contain atleast 5 characters")
    .max(25, "*Property name must not contain more than 25 characters"),
  email: yup.string().required("*required").email("*Email is not valid").trim(),
  phNo: yup.string().required("*required").matches(phNoRules, "*Phone No. is not valid"),
  description: yup.string().required("*required").min(8, "*Description must contain atleast 8 characters")
});
