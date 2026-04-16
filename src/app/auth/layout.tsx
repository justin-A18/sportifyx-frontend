import { AuthFooter } from "@/modules/auth/components/AuthFooter";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
        {children}
      </main>
      <AuthFooter />
    </div>
  );
}
