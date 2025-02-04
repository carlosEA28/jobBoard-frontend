import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function cleanInput() {
    setEmail("");
    setPassword("");
  }

  return (
    <form className="flex flex-col justify-center gap-4">
      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-left">Email</label>
        <FormInput
          width="full"
          placeholder="Email Address"
          value={email}
          type={""}
          onChange={cleanInput}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium text-left">Password</label>
        <FormInput
          width="full"
          placeholder="Password"
          value={""}
          type={""}
          onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <Button
        title="Sign In"
        color="bg-[#FF9966]"
        textColor=""
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </form>
  );
}
