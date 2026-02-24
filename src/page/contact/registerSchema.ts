import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "Minimum 2 characters")
    .max(30, "Maximum 30 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  message: yup
    .string()
    .trim()
    .required("Message is required")
    .min(10, "Minimum 10 characters"),
});

