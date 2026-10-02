import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/login.schema";
import { useLoginMutation } from "../hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  formContainerClass,
  errorAlertClass,
  submitButtonClass,
} from "./LoginForm.styles";

export const LoginForm: React.FC = () => {
  const { mutate: login, isPending, isError, error } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: LoginFormData) => login(data);

  const errorMessage = isError
    ? (error as any)?.response?.data?.message ||
      "Login failed. Please check your credentials."
    : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formContainerClass}>
      {errorMessage && <div className={errorAlertClass}>{errorMessage}</div>}

      <Input
        label="Email Address"
        type="email"
        placeholder="admin@company.com"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        {...register("password")}
      />

      <Button type="submit" className={submitButtonClass} isLoading={isPending}>
        Sign In to HRMS Admin
      </Button>
    </form>
  );
};
