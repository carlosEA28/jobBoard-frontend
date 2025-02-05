import FormInput from "./FormInput";
import Button from "./Button";
import { useState, type FormEvent } from "react";
import { LoginLocalUser } from "~/api/UserCalls";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmitLogin(e: FormEvent) {
    e.preventDefault();
    LoginLocalUser(email, password);
  }

  return (
    <form className="flex flex-col justify-center gap-4">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-left">Email</label>
        <FormInput
          width="full"
          placeholder="Email Address"
          value={email}
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-left">Password</label>
        <FormInput
          width="full"
          placeholder="Password"
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button
        title="Sign In"
        color="bg-[#FF9966]"
        textColor=""
        onClick={handleSubmitLogin}
      />
    </form>
  );
}
