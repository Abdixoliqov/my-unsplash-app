// react router dom
import { Form } from "react-router-dom";

// components
import { FormInput } from "../components";

function Register() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-[40%] bg-[url('https://picsum.photos/900/1200')] bg-cover bg-center"></div>
      <div className="w-[60%] flex items-center justify-center">
        <Form method="post" className="w-full max-w-96">
          <h1 className="text-center mb-5 font-semibold text-4xl">Register</h1>

          <div className="flex flex-col gap-4">
            <FormInput placeholder={"Full Name"} name={"displayName"} type={"text"}/>
            <FormInput placeholder={"Email"} name={"email"} type={"email"}/>
            <FormInput placeholder={"Password"} name={"password"} type={"password"}/>
            <FormInput placeholder={"Confirm Password"} name={"password"} type={"password"}/>
          </div>

          <div className="flex gap-5 my-5">
            <button type="submit" className="grow btn btn-primary">Register</button>
            <button type="button" className="grow btn btn-secondary">Google</button>
          </div>

        </Form>
      </div>
    </div>
  );
}

export default Register;
