import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { object, string, ref } from 'yup';

let signupvalidation = object({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
  retypePassword: string().oneOf([ref("password"), null], "Passwords must match").required("Retype password is required"),
});

function Signup() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-200">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: "",
          retypePassword: "",
          agreeTerms: false,
        }}
        validationSchema={signupvalidation}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="h-auto sm:w-4/5 md:w-2/3 lg:w-1/3 bg-white flex flex-col justify-center rounded-3xl p-8">
            <h1 className="font-medium text-3xl tracking-widest mt-1 text-center">
              Welcome to Authentication
            </h1>
            <h4 className="text-slate-600 mt-4 text-center">
              Create a free account by filling data below.
            </h4>

            <div className="flex flex-col sm:flex-row gap-5 mt-6">
              <div className="sm:w-1/2">
                <label htmlFor="name" className="text-xl font-medium text-slate-600">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="James"
                  className="mt-1 block w-full px-4 py-2 bg-white border-2 border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-1 focus:ring-sky-50"
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-sm">{errors.name}</div>
                )}
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="surname" className="text-xl font-medium text-slate-600">
                  Surname
                </label>
                <Field
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Arthur"
                  className="mt-1 block w-full px-4 py-2 bg-white border-2 border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-1 focus:ring-sky-50"
                />
                {errors.surname && touched.surname && (
                  <div className="text-red-500 text-sm">{errors.surname}</div>
                )}
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="email" className="text-xl font-medium text-slate-600">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                className="mt-1 block w-full px-4 py-2 bg-white border-2 border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-1 focus:ring-sky-50"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="text-xl font-medium text-slate-600">
                Password
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="mt-1 block w-full px-4 py-2 bg-white border-2 border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-1 focus:ring-sky-50"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
              )}
            </div>

            <div className="mt-3">
              <label htmlFor="retypePassword" className="text-xl font-medium text-slate-600">
                Retype Password
              </label>
              <Field
                type="password"
                id="retypePassword"
                name="retypePassword"
                placeholder="Retype Password"
                className="mt-1 block w-full px-4 py-2 bg-white border-2 border-slate-300 rounded-md placeholder-slate-400 focus:outline-none focus:border-sky-200 focus:ring-1 focus:ring-sky-50"
              />
              {errors.retypePassword && touched.retypePassword && (
                <div className="text-red-500 text-sm">{errors.retypePassword}</div>
              )}
            </div>

            <div className="inline-flex items-center mt-5">
              <Field
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                className="form-checkbox text-blue-300 h-5 w-5 cursor-pointer"
              />
              <span className="ml-3 text-gray-700">
                I agree with{" "}
                <span className="text-blue-400 cursor-pointer">Terms & Conditions</span>
              </span>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-gray-300 hover:bg-blue-300 rounded-2xl mt-4"
            >
              Create Account
            </button>
            <div className="flex items-center justify-center gap-4 mt-4">
          <p>Already have an account?</p>
          <Link to = "/">
          <span className="text-blue-400">Log In</span>
          </Link>
        </div>
          
          </Form>

        )}
      </Formik>
    </div>
  );
}

export default Signup;
