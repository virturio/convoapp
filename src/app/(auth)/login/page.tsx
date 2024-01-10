"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "../../../lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import actionLoginUser from "@/lib/auth-action";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [submitError, setSubmitError] = useState("");

  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const isLoading = form.formState.isLoading;

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    const { error } = await actionLoginUser(formData);

    if (error) {
      form.reset();
      setSubmitError(error.message);
      return;
    }

    router.replace("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:justify-center gap-4 flex flex-col p-6"
      >
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/icons/convologo.svg"}
            width={50}
            height={50}
            alt="Convo Logo"
          />
          <span className="text-4xl font-semibold">Convo.</span>
        </Link>
        <FormDescription
          className="
        text-foreground/60"
        >
          An all-In-One Collaboration and Productivity Platform
        </FormDescription>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting.." : "Submit"}
        </Button>
        <span className=" self-center">
          Do you have an account ?{" "}
          <Link href={"/signup"} className=" text-primary">
            Sign up
          </Link>
        </span>
      </form>
    </Form>
  );
};

export default LoginPage;
