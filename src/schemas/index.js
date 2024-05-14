import * as Yup from "yup";

export const LoginInSchema = Yup.object({
    email: Yup.string().email().min(6).max(50).required("Email is required"),
    password: Yup.string().min(8).max(25).required("Password is required"),
})

export const SignUpSchema = Yup.object({
    userName: Yup.string().min(2).max(25).required("Username is required"),
    email: Yup.string().email().min(6).max(50).required("Email is required"),
    phoneNumber: Yup.string().min(11).max(13).required("Phone Number is required"),
    password: Yup.string().min(8).max(25).required("Password is required"),
    confirmPassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  })