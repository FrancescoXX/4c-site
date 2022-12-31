import React from "react";
import router from "next/router";
import { useFormik } from "formik";
import { formSchema } from "./validation/formSchema";
import Loading from "../Loading.jsx";
import Axios from "axios";

const JoinusForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      github: "",
      twitter: "",
      question1: "",
      question2: "",
      question3: "",
    },
    validationSchema: formSchema,
  });

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = () => {
    // console.log(formik.values);
    setLoading(true);
    Axios.post(process.env.NEXT_PUBLIC_SHEETS_API, formik.values)
      .then(function () {
        setLoading(false);
        alert("Thank you!! Your form has been submitted successfully!!");
        router.push("/");
      })
      .catch(function (error) {
        setLoading(false);
        alert(error.message);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
        <div className="pb-10 text-center">
          <h1 className="my-3 text-base font-normal text-gray-700">
            4C is a community to connect with other like-minded creators,
            collaborate on ideas, and motivate each other to create and publish!
          </h1>
        </div>
        <div>
          <form id="loginform" onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block ml-2 text-sm text-left text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className="w-full px-3 py-2 text-sm text-black placeholder-gray-300 border border-gray-300 rounded-md focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                onChange={formik.handleChange}
              />
              {formik.errors.fullName && (
                <p className="block mt-2 ml-2 text-sm text-left text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.fullName}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block ml-2 text-sm text-left text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@email.com"
                required
                className="w-full px-3 py-2 text-sm text-black placeholder-gray-300 border border-gray-300 rounded-md focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <p className="block mt-2 ml-2 text-sm text-left text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.email}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="github"
                className="block ml-2 text-sm text-left text-gray-600"
              >
                Github Username
              </label>
              <input
                type="text"
                name="github"
                id="github"
                placeholder="@"
                required
                className="w-full px-3 py-2 text-sm text-black placeholder-gray-300 border border-gray-300 rounded-md focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                onChange={formik.handleChange}
              />
              {formik.errors.github && (
                <p className="block mt-2 ml-2 text-sm text-left text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.github}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="twitter"
                className="block ml-2 text-sm text-left text-gray-600"
              >
                Twitter Username
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="@"
                required
                className="w-full px-3 py-2 text-sm text-black placeholder-gray-300 border border-gray-300 rounded-md focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                onChange={formik.handleChange}
              />
              {formik.errors.twitter && (
                <p className="block mt-2 ml-2 text-sm text-left text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.twitter}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 ml-2 text-sm text-left text-gray-600"
              >
                What do you know about 4C Community?{" "}
              </label>

              <textarea
                rows="5"
                name="question1"
                id="question1"
                placeholder="Your Message"
                className="w-full px-3 py-2 text-sm text-black placeholder-gray-300 border border-gray-300 rounded-md focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                onChange={formik.handleChange}
                required
              ></textarea>

              {formik.errors.question1 && (
                <p className="block mt-2 ml-2 text-sm text-left text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.question1}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 ml-2 text-sm text-left text-gray-600"
              >
                Why do you want to join our staff team?
              </label>

              <textarea
                rows="5"
                name="question2"
                id="question2"
                placeholder="Your Message"
                className="w-full px-3 py-2 text-sm text-black placeholder-gray-300 border border-gray-300 rounded-md focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                onChange={formik.handleChange}
                required
              ></textarea>
              {formik.errors.question2 && (
                <p className="block mt-2 ml-2 text-sm text-left text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.question2}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-2 ml-2 text-sm text-left text-gray-600"
              >
                Tell us something cool about yourself
              </label>

              <textarea
                rows="5"
                name="question3"
                id="question3"
                placeholder="Your Message"
                className="w-full px-3 py-2 text-sm text-black placeholder-gray-300 border border-gray-300 rounded-md focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100"
                onChange={formik.handleChange}
                required
              ></textarea>
              {formik.errors.question3 && (
                <p className="block mt-2 ml-2 text-sm text-left text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.question3}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              {loading ? (
                <Loading />
              ) : (
                <button
                  form="loginform"
                  onClick={handleSubmit}
                  className="w-full px-2 py-4 text-sm text-white bg-blue-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                  type="submit"
                >
                  Submit your application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinusForm;
