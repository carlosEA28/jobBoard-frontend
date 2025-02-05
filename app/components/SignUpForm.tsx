import FormInput from "./FormInput";
import { CreateAccount } from "~/api/UserCalls";
import { useForm } from "react-hook-form";
import { signUpSchema } from "~/schemas/schemas";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function SignUpForm() {
  type FormData = z.infer<typeof signUpSchema>;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
  });

  async function onSubmit(data: FormData) {
    CreateAccount(data.firstName, data.lastName, data.email, data.password);
  }

  return (
    <form
      className="flex flex-col items-center justify-center gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-4">
        <FormInput
          placeholder="First Name"
          type={"text"}
          width={"179px"}
          name={"firstName"}
          error={errors.firstName?.message}
          register={register}
        />
        <FormInput
          placeholder="Last Name"
          width={"179px"}
          type={"text"}
          name={"lastName"}
          error={errors.lastName?.message}
          register={register}
        />
      </div>

      <FormInput
        type="email"
        placeholder="Email Address"
        width={"100%"}
        name={"email"}
        error={errors.email?.message}
        register={register}
      />
      <FormInput
        type="password"
        placeholder="Password"
        width={"100%"}
        name={"password"}
        error={errors.password?.message}
        register={register}
      />

      <button
        type="submit"
        className="bg-[#FF9966] w-[180px] h-[60px] font-semibold border rounded-md disabled:bg-gray-400"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Sign Up"}
      </button>
    </form>
  );
}
