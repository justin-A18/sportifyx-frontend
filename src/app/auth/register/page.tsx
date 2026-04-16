import { AuthLogo } from "@/modules/auth/components/AuthLogo";
import { RegisterForm } from "@/modules/auth/components/RegisterForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/modules/shared/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-8">
      <AuthLogo />

      <Card className="border-border/50 bg-card/80 backdrop-blur-xl">
        <CardHeader className="pb-6">
          <CardTitle className="text-xl font-semibold">
            Registro de Atleta
          </CardTitle>
          <CardDescription className="text-sm">
            Crea tu cuenta para acceder a SportifyX.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
}
