// react router dom
import { Form, Link } from "react-router-dom";

// components
import { FormInput } from "../components";

// register hooks
import { useRegister } from "../hooks/useRegister";

function Register() {
  const { registerWithGoogle } = useRegister();
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden w-[40%] bg-[url('https://picsum.photos/900/1200')] bg-cover bg-center md:block"></div>
      <div className="fixed top-0 bottom-0 right-0 left-0 w-full bg-black bg-opacity-65 md:hidden"></div>
      
      <div className="flex w-full items-center justify-center bg-[url('https://picsum.photos/900/1200')] bg-cover bg-center md:w-[60%] md:bg-none">
        <Form method="post" className="w-full max-w-96 px-5 md:px-0 relative z-50">
          <h1 className="mb-5 text-center text-4xl font-semibold text-white md:text-black">
            Register
          </h1>

          <div className="flex flex-col gap-4">
            <FormInput
              placeholder={"Full Name"}
              name={"displayName"}
              type={"text"}
            />
            <FormInput placeholder={"Email"} name={"email"} type={"email"} />
            <FormInput
              placeholder={"Password"}
              name={"password"}
              type={"password"}
            />
            <FormInput
              placeholder={"Confirm Password"}
              name={"password"}
              type={"password"}
            />
          </div>

          <div className="my-5 flex flex-col gap-5 md:flex-row">
            <button
              type="submit"
              className="btn btn-primary btn-sm grow md:btn-md"
            >
              Register
            </button>
            <button
            onClick={registerWithGoogle}
              type="button"
              className="btn btn-secondary btn-sm grow md:btn-md"
            >
              Google
            </button>
          </div>

          <div className="text-center">
            <Link
              to={"/login"}
              className="link link-primary text-white md:text-black"
            >
              You alredy have account!
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
