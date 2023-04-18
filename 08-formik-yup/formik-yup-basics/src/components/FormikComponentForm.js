import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

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
    socials: {
      facebook: "",
      twitter: ""
    },
    phoneNumber: [],
    hobbies: [""]
  };

  const handleSubmit = (values, actions) => {
    // actions.resetForm(); // to clear the form values
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

        <div>
          <label htmlFor="facebook" >facebook</label>
          <Field 
            id="facebook" 
            name="socials.facebook"  //Note: we have to specify nested property in this manner
            placeholder="facebook" 
            type="text"
          />
        </div>

        <div>
          <label htmlFor="twitter" >twitter</label>
          <Field 
            id="twitter" 
            name="socials.twitter"  //Note: we have to specify nested property in this manner
            placeholder="twitter" 
            type="text"
          />
        </div>

        {/* phoneNumber */}
        <div>
          <label htmlFor="phoneNumber" >Primary Phone no.</label>
          <Field 
            id="primary-phoneNumber" 
            name="phoneNumber[0]"
            placeholder="Primary Phone no." 
            type="text"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" >secondary Phone no.</label>
          <Field 
            id="secondary-phoneNumber" 
            name="phoneNumber[1]"
            placeholder="secondary Phone no." 
            type="text"
          />
        </div>

        <div>
          <label htmlFor="hobbies" >hobbies</label>
          <FieldArray 
            id="hobbies" 
            name="hobbies"
            placeholder="hobbies." 
            type="text"
          >
            {(fieldArrayProps)=>{

                const {push, remove, form:{ values: {hobbies}}} = fieldArrayProps;
                console.log(hobbies)
                return(
                  <div>
                    {hobbies.map((hobbie, i)=>(
                      <div key={i} >
                        <Field name={`hobbies[${i}]`} />
                        {(i>0) && <button onClick={()=> remove(i)} >-</button>}
                        <button onClick={()=> push("")} >+</button>
                      </div>
                    ))}
                  </div>
                )
              }}
          </FieldArray>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default FormikComponentForm;
