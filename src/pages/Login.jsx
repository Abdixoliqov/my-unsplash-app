// react router dom
import { Form, Link } from "react-router-dom";

// components
import { FormInput } from "../components";

// useRegister hooks
import { useRegister } from "../hooks/useRegister";

function Login() {
  const { registerWithGoogle } = useRegister();
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden w-[40%] bg-[url('https://picsum.photos/900/1200')] bg-cover bg-center md:block"></div>
      <div className="fixed bottom-0 left-0 right-0 top-0 w-full bg-black opacity-65 md:hidden"></div>
      <div className="flex w-full items-center justify-center bg-[url('https://picsum.photos/900/1200')] bg-cover bg-center md:w-[60%] md:bg-none">
        <Form
          method="post"
          className="relative z-50 w-full max-w-96 px-5 md:px-0"
        >
          <h1 className="mb-5 text-center text-4xl font-semibold text-white md:text-black">
            Login
          </h1>

          <div className="flex flex-col gap-4">
            <FormInput placeholder={"Email"} name={"email"} type={"email"} />
            <FormInput
              placeholder={"Password"}
              name={"password"}
              type={"password"}
            />
          </div>

          <div className="my-5 flex flex-col gap-5 md:flex-row">
            <button
              type="submit"
              className="btn btn-primary btn-sm grow md:btn-md"
            >
              Login
            </button>
            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn btn-secondary btn-sm grow md:btn-md"
            >
              Google
            </button>
          </div>
          <div className="flex flex-col justify-between text-center md:flex-row">
            <p className="text-white md:text-black">Forget password?</p>
            <Link
              to={"/register"}
              className="link link-primary text-white md:text-black"
            >
              You don't have account yet?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
