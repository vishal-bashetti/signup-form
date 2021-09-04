import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function SignupForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function handleValidation(data) {
    console.log(data);
    alert("successfully submitted form");
  }
  return (
    <form
      action="#"
      className="signup-form"
      onSubmit={handleSubmit(handleValidation)}
      aria-label="Signup form"
    >
      <input
        type="text"
        placeholder="First Name"
        className={`first-name ${errors.firstNameError && "error"}`}
        {...register("firstNameError", { required: "First Name cannot be empty" })}
      />
      <ErrorMessage
        errors={errors}
        name="firstNameError"
        render={({ message }) => <p className="first-name_error error-message">{message}</p>}
      />
      <input
        type="text"
        placeholder="Last Name"
        className={`last-name ${errors.lastNameError && "error"}`}
        {...register("lastNameError", { required: "Last cannot be empty" })}
      />
      <ErrorMessage
        errors={errors}
        name="lastNameError"
        render={({ message }) => <p className="last-name_error error-message">{message}</p>}
      />
      <input
        type="text"
        placeholder="Email Address"
        className={`email ${errors.emailError && "error"}`}
        {...register("emailError", {
          required: "E-mail cannot be empty",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Looks like this is not an email",
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name="emailError"
        render={({ message }) => <p className="email_error error-message">{message}</p>}
      />
      <input
        type="password"
        placeholder="Password"
        className={`password ${errors.passwordError && "error"}`}
        {...register("passwordError", { required: "Password cannot be empty" })}
      />
      <ErrorMessage
        errors={errors}
        name="passwordError"
        render={({ message }) => <p className="password_error error-message">{message}</p>}
      />
      <button type="submit" className="signup-btn">
        Claim your free trial
      </button>
      <p className="terms">
        By clicking the button, you are agreeing to our
        <a href="/#" className="terms-link">
          {" "}
          Terms and Services
        </a>
      </p>
    </form>
  );
}

export default SignupForm;
