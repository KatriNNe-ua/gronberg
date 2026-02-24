import type { ReactElement } from "react";
import Input from "./components/Input";
import { useRegisterForm } from "./hook/useRegisterForm";
import Textarea from "./components/Textarea";

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

function Contact(): ReactElement {
  const { register, handleSubmit, reset, errors, isSubmitting } =
    useRegisterForm();

  const submit = async (values: ContactFormValues) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/mazyrukkatya@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      const result = await response.json();

      if (result.success === "true") {
        reset();
      } else {
        console.error("FormSubmit response:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <section className="main__contact contact">
      <div className="contact__container">
        <div className="contact__img">
          <img src="images/home/hero/main-image.webp" alt="img" />
        </div>
        <form className="contact__form" onSubmit={handleSubmit(submit)}>
          <h1 className="contact__title headline">Contact</h1>
          <div className="contact__wrapper">
            <div className="contact__item">
              <Input
                id="name"
                label="Name"
                error={errors.name?.message}
                {...register("name")}
              />
            </div>
            <div className="contact__item">
              <Input
                id="email"
                label=" Email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>
            <div className="contact__item">
              <Textarea
                id="message"
                label="Message"
                error={errors.message?.message}
                {...register("message")}
              />
            </div>
            <button type="submit" className="information__link btn">
              {isSubmitting ? "Sending . . ." : "Send"}
              <svg
                width="32"
                height="15"
                viewBox="0 0 32 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 7.35352H30" stroke="#DB574D" />
                <path
                  d="M23.5 0.353516L30.5 7.35352L23.5 14.3535"
                  stroke="#DB574D"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
