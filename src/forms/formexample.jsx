import { Formik, Form, Field } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const validationSchema = z.object({
  username: z.string().min(5, "Name is required").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "You must be at least 18 years old"),
  address: z.string().min(5,"Address is required").max(50,"Address is too long"),
  password:z.string().min(8, "Password must be at least 8 characters").max(32, "Password must be at most 32 characters").regex(/[^a-zA-Z0-9]/, " Password must include a special character"),
});

const initialValues = {
  username: "",
  email: "",
  age: "",
  address: "",
  password: "",
};

const FormExample = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Values:", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div>
            <label>Username</label>
            <Field
              type="text"
              name="username"
              className="border border-red-500 rounded-md"
            />
            {errors.name}
          </div>
             <br></br>

          <div>
            <label>Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className="border border-red-500 rounded-md"
            />
            {errors.email}
          </div>
            <br></br>


          <div>
            <label>Age</label>
            <Field
              type="number"
              name="age"
              className="border border-red-500 rounded-md"
            />
            {errors.age}
          </div>
            <br></br>
          
          <div>
            <label>Address</label>
            <Field
              as="textarea"
              name="address"
              className="border border-red-500 rounded-md"
            />
            {errors.address}
          </div>
            <br></br>
          
          <div>
            <label>Password</label>
            <Field
              type="password"
              name="password"
              className="border border-red-500 bg-white rounded-md"
            />
            {errors.password}
          </div>
            <br></br>

          <button
            type="submit"
            disabled={isSubmitting}
            className="border border-green-500 rounded-md"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormExample;






