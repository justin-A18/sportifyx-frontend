import { useCallback, useState } from "react";
import type { ResetPasswordInput } from "../schema/auth-schema";

interface UseResetPasswordReturn {
	isLoading: boolean;
	error: string | null;
	resetPassword: (input: ResetPasswordInput) => Promise<void>;
	clearError: () => void;
}

export function useResetPassword(): UseResetPasswordReturn {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const resetPassword = useCallback(async (_input: ResetPasswordInput) => {
		setIsLoading(true);
		setError(null);

		try {
			// TODO: Replace with actual API call to reset password
			await new Promise((r) => setTimeout(r, 1500));

			// Simulate success
		} catch {
			setError("No se pudo restablecer la contraseña. Intente de nuevo.");
		} finally {
			setIsLoading(false);
		}
	}, []);

	const clearError = useCallback(() => setError(null), []);

	return { isLoading, error, resetPassword, clearError };
}
