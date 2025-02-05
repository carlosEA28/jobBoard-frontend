import { useState, type FormEvent } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import axios from "axios";
import { CreateAccount } from "~/api/UserCalls";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { handleSubmit, register } = useForm();

  async function onSubmit() {
    CreateAccount(firstName, lastName, email, password);
  }

  return (
    <form
      className="flex flex-col justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <FormInput
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type={"text"}
          width={"179px"}
        />
        <FormInput
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          width={"179px"}
          type={"text"}
        />
      </div>

      <FormInput
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        width={""}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        width={""}
      />

      <Button
        title="Sign Up"
        color="bg-[#FF9966]"
        textColor={""}
        onClick={function (e: React.MouseEvent<HTMLButtonElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </form>
  );
}
