import { useFormik } from "formik";
import { formSchema } from "./validation/formSchema";

const JoinusForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      location: "",
      github: "",
      twitter: "",
      question1: "",
      question2: "",
      question3: [""],
      question4: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="container mx-auto">
      <div className="max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm">
        <div className="text-center pb-10">
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
                className="block text-left ml-2 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className="w-full text-sm px-3 py-2 placeholder-gray-300 text-black border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                onChange={formik.handleChange}
              />
              {formik.errors.fullName && (
                <p className="block ml-2 mt-2 text-left text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.fullName}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-left ml-2 text-sm text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@email.com"
                required
                className="w-full text-sm px-3 py-2 placeholder-gray-300 text-black border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <p className="block ml-2 mt-2 text-left text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.email}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="github"
                className="block text-left ml-2 text-sm text-gray-600"
              >
                Github Username
              </label>
              <input
                type="text"
                name="github"
                id="github"
                placeholder="@"
                required
                className="w-full text-sm px-3 py-2 placeholder-gray-300 text-black border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                onChange={formik.handleChange}
              />
              {formik.errors.github && (
                <p className="block ml-2 mt-2 text-left text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.github}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="twitter"
                className="block text-left ml-2 text-sm text-gray-600"
              >
                Twitter Username
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="@"
                required
                className="w-full text-sm px-3 py-2 placeholder-gray-300 text-black border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                onChange={formik.handleChange}
              />
              {formik.errors.twitter && (
                <p className="block ml-2 mt-2 text-left text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.twitter}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left ml-2 mb-2 text-sm text-gray-600"
              >
                What do you know about 4C Community?{" "}
              </label>

              <textarea
                rows="5"
                name="question1"
                id="question1"
                placeholder="Your Message"
                className="w-full text-sm px-3 py-2 placeholder-gray-300 text-black border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                onChange={formik.handleChange}
                required
              ></textarea>

              {formik.errors.question1 && (
                <p className="block ml-2 mt-2 text-left text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.question1}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left ml-2 mb-2 text-sm text-gray-600"
              >
                Why do you want to join our staff team?
              </label>

              <textarea
                rows="5"
                name="question2"
                id="question2"
                placeholder="Your Message"
                className="w-full text-sm px-3 py-2 placeholder-gray-300 text-black border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                onChange={formik.handleChange}
                required
              ></textarea>
              {formik.errors.question2 && (
                <p className="block ml-2 mt-2 text-left text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.question2}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-left ml-2 mb-2 text-sm text-gray-600"
              >
                Tell us something cool about yourself
              </label>

              <textarea
                rows="5"
                name="question4"
                id="question4"
                placeholder="Your Message"
                className="w-full text-sm px-3 py-2 placeholder-gray-300 text-black border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                onChange={formik.handleChange}
                required
              ></textarea>
              {formik.errors.question4 && (
                <p className="block ml-2 mt-2 text-left text-sm text-red-600 dark:text-red-500">
                  <span className="font-medium">{formik.errors.question4}</span>
                </p>
              )}
            </div>
            <div className="mb-4">
              <button
                form="loginform"
                onClick={() => console.log(formik.values)}
                className="w-full text-sm px-2 py-4 text-white bg-blue-500
            rounded-md  focus:bg-indigo-600 focus:outline-none"
                type="submit"
              >
                Submit your application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinusForm;
