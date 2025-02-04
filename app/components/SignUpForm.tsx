import { useState, type FormEvent } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import axios from "axios";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const userData = {
      firstName,
      secondName: lastName,
      email,
      password,
    };

    axios
      .post("http://localhost:8080/user/register", userData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.status, res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error(
            "Erro na resposta do servidor:",
            error.response.status,
            error.response.data
          );
        } else if (error.request) {
          console.error(
            "Erro de rede ou servidor não respondeu:",
            error.request
          );
        } else {
          console.error("Erro desconhecido:", error.message);
        }
      });
  }

  return (
    <form className="flex flex-col justify-center gap-4">
      <div className="flex gap-4">
        <FormInput
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          width={""}
          type={"text"}
        />
        <FormInput
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          width={""}
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
        onClick={handleSubmit}
        textColor={""}
      />
    </form>
  );
}
