import { Formik, Form, Field, ErrorMessage } from "formik";

// validation schema
import { basicSchema } from "../schema/basicSchema";
import CustomErrorComponent from "./CustomErrorComponent";

const FormikComponentForm = () => {
  /*   const {
    // handleChange,
    // handleBlur,
    // values,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit(values, actions) {
      actions.resetForm(); // to clear the form values
      console.log("submitted");
      console.log(values);
    },
  }); */

  const initialValues = {
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
    address: "",
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    actions.resetForm(); // to clear the form values
    console.log("submitted");
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={basicSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field
            //1. hookup inputs to the top level formik component (handleBlur, handleChange)
            //2. uses name attribute to matchup the formik state
            //3. by default it will render the html input element
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            // className={errors.email && touched.email ? "input-error" : ""}
          />
          {/* 
          {errors.email && touched.email ? (
          <p className="error">{errors.email}</p>
        ) : null} 
          This is same as below component
          */}
          <ErrorMessage name="email">
            {(errorMsg)=>{
              return <CustomErrorComponent>
                  {errorMsg}
              </CustomErrorComponent>
            }}
          </ErrorMessage>
        </div>

        <div>
          <label htmlFor="age">age</label>
          <Field
            id="age"
            type="number"
            placeholder="Enter your age"
            name="age"
          />
          {/* as of now ErrorMessage is a text node so we can specify what to render by component props */}
          <ErrorMessage name="age" component="div" /> 
          {/* but we can also render a custom component in this */}
          <ErrorMessage name="age" component={CustomErrorComponent} /> 
          {/* we can also do this by render props method */}
        </div>

        <div>
          <label htmlFor="password">password</label>
          <Field
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <ErrorMessage name="password" />
        </div>

        <div>
          <label htmlFor="confirmPassword">confirmPassword</label>
          <Field
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <ErrorMessage name="confirmPassword" />
        </div>

        <div>
          <label htmlFor="address">address</label>
          <Field
            id="address"
            type="text"
            placeholder="address"
            name="address"
            as="textarea"
          />
          <ErrorMessage name="address" />
        </div>

        {/* using render props pattern method */}
        <div>
          <label htmlFor="comment"> comment</label>
          <Field name="comment">
            {(props) => {
              console.log(props);
              const { field, meta, form } = props;
              return (
                <div>
                  <input type="text" id="comment" {...field} />
                  {meta.touched && meta.error ? <p>{meta.error}</p> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default FormikComponentForm;
