import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../registerSchema";
import type { ContactFormValues } from "../Contact";


const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export const useRegisterForm = () => {
  const form = useForm({
    mode: "onBlur",
    defaultValues,
    resolver: yupResolver(registerSchema),
  });

  return {
    ...form,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
  };
};
