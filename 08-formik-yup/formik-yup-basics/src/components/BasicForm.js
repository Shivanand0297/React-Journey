import { useFormik } from "formik";

// validation schema
import { basicSchema } from "../schema/basicSchema";

const BasicForm = () => {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit(values, actions) {
        actions.resetForm() // to clear the form values
        console.log("submitted");
      },
    });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email ? <p className="error" >{errors.email}</p> : null}

      <label htmlFor="age">age</label>
      <input
        id="age"
        type="number"
        placeholder="Enter your age"
        value={values.age}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age ? <p className="error" >{errors.age}</p> : null}
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password ? <p className="error" >{errors.password}</p> : null}
      <label htmlFor="confirmPassword">confirmPassword</label>
      <input
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword ? (
        <p className="error" >{errors.confirmPassword}</p>
      ) : null}
      <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
