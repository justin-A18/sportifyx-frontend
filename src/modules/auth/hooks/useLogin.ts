import { useCallback, useState } from "react";
import type { LoginInput } from "../schema/auth-schema";

interface UseLoginReturn {
  isLoading: boolean;
  error: string | null;
  login: (input: LoginInput) => Promise<void>;
  clearError: () => void;
}

export function useLogin(): UseLoginReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (_input: LoginInput) => {
    setIsLoading(true);
    setError(null);

    try {
      // TODO: Replace with actual auth API call
      await new Promise((r) => setTimeout(r, 1500));
    } catch {
      setError("Credenciales inválidas. Intente de nuevo.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { isLoading, error, login, clearError };
}
