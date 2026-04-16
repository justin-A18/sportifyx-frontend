import { AuthLogo } from "@/modules/auth/components/AuthLogo";
import { ForgotPasswordForm } from "@/modules/auth/components/ForgotPasswordForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/shared/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-8">
      <AuthLogo />

      <Card className="border-border/50 bg-card/80 backdrop-blur-xl">
        <CardHeader className="pb-6">
          <CardTitle className="text-xl font-semibold">
            ¿Olvidó su contraseña?
          </CardTitle>
          <CardDescription className="text-sm">
            Ingrese su correo electrónico y le enviaremos un enlace para
            restablecerla.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
}
