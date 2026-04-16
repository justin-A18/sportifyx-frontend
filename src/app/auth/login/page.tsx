import { AuthLogo } from "@/modules/auth/components/AuthLogo";
import { LoginForm } from "@/modules/auth/components/LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/shared/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-8">
      <AuthLogo />

      <Card className="border-border/50 bg-card/80 backdrop-blur-xl">
        <CardHeader className="pb-6">
          <CardTitle className="text-xl font-semibold">
            Bienvenido, atleta
          </CardTitle>
          <CardDescription className="text-sm">
            Ingrese sus credenciales para acceder al vault.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
