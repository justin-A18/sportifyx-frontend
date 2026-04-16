import { AuthLogo } from "@/modules/auth/components/AuthLogo";
import { ResetPasswordForm } from "@/modules/auth/components/ResetPasswordForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/shared/components/ui/card";

export default function ResetPasswordPage() {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-8">
      <AuthLogo />

      <Card className="border-border/50 bg-card/80 backdrop-blur-xl">
        <CardHeader className="pb-6">
          <CardTitle className="text-xl font-semibold">
            Restablecer contraseña
          </CardTitle>
          <CardDescription className="text-sm">
            Ingrese su nueva contraseña.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
}
