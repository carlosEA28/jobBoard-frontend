import imgSignUp from "app/assets/signUpImg.svg";
import SocialButton from "app/components/SocialButton";
import google from "app/assets/googleLogo.svg";
import git from "app/assets/github.svg";
import SignUpForm from "~/components/SignUpForm";

export default function SignUp() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex items-center justify-center bg-[#F7F5F0] p-10">
        <div className=" flex flex-col text-center w-[370px] max-w-md">
          <div className="flex flex-col gap-4 mb-6">
            <h3 className="text-3xl text-left font-bold">Sign Up</h3>
            <p className="text-gray-600 text-left">
              Find jobs, events and communities that celebrate your background.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <SocialButton logo={google} text="Continue with Google" />
            <SocialButton logo={git} text="Continue with Github" />
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <SignUpForm />

          <p className="text-xs text-gray-500 mt-4">
            By clicking "Sign up" you're agreeing to our{" "}
            <a href="#" className="underline">
              Terms & Conditions
            </a>
            .
          </p>
          <p className="text-sm text-gray-700 mt-4 text-center">
            Have an account?
            <a href="/signin" className="font-bold">
              Sign In
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img
          className="w-full h-full object-cover"
          src={imgSignUp}
          alt="Sign Up Illustration"
        />
      </div>
    </div>
  );
}
