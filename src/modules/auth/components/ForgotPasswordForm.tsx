"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/modules/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/modules/shared/components/ui/form";
import { Input } from "@/modules/shared/components/ui/input";
import { useForgotPassword } from "../hooks/useForgotPassword";
import {
  type ForgotPasswordInput,
  forgotPasswordSchema,
} from "../schema/auth-schema";

export function ForgotPasswordForm() {
  const { isLoading, error, forgotPassword } = useForgotPassword();

  const form = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = form.handleSubmit((data) => forgotPassword(data));

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-5">
        {error && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Correo electrónico
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  placeholder="ejemplo@sportifyx.com"
                  autoCapitalize="none"
                  autoComplete="email"
                  disabled={isLoading}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
          {isLoading ? "Enviando..." : "Recuperar contraseña"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          <Link
            href="/auth/login"
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            Volver al inicio de sesión
          </Link>
        </p>
      </form>
    </Form>
  );
}
