import * as Yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email")
    .required("email is required"),
  age: Yup.number().positive().integer().required("age is required"),
  password: Yup.string()
    .min(5)
    .matches(passwordRegex, { message: "password must be strong" }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must match")
    .required(),
});
