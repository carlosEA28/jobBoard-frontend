import FormInput from "./FormInput";
import { LoginLocalUser } from "~/api/UserCalls";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { signInSchema, signUpSchema } from "~/schemas/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router";

export default function SignInForm() {
  type FormData = z.infer<typeof signInSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
  });

  async function handleSubmitLogin(data: FormData) {
    await LoginLocalUser(data.email, data.password);
  }

  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit(handleSubmitLogin)}
    >
      <div className="w-full flex flex-col">
        <label className="mb-1 text-sm font-medium text-left">Email</label>
        <FormInput
          width={"100%"}
          placeholder="Email Address"
          type={"email"}
          name={"email"}
          register={register}
          error={errors.email?.message}
        />
      </div>

      <div className="w-full flex flex-col">
        <label className="mb-1 text-sm font-medium text-left">Password</label>
        <FormInput
          width={"100%"}
          placeholder="Password"
          type={"password"}
          name={"password"}
          register={register}
          error={errors.password?.message}
        />
      </div>

      <button
        type="submit"
        className="bg-[#FF9966] w-[180px] h-[60px] font-semibold border rounded-md disabled:bg-[#FF9966] flex items-center justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loader className="animate-spin" /> : "Sign Up"}
      </button>
    </form>
  );
}
