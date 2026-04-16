import { useCallback, useState } from "react";
import type { ForgotPasswordInput } from "../schema/auth-schema";

interface UseForgotPasswordReturn {
	isLoading: boolean;
	error: string | null;
	forgotPassword: (input: ForgotPasswordInput) => Promise<void>;
	clearError: () => void;
}

export function useForgotPassword(): UseForgotPasswordReturn {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const forgotPassword = useCallback(async (_input: ForgotPasswordInput) => {
		setIsLoading(true);
		setError(null);

		try {
			// TODO: Replace with actual API call to send reset email
			await new Promise((r) => setTimeout(r, 1500));

			// Simulate success
		} catch {
			setError(
				"No se pudo enviar el correo de recuperación. Intente de nuevo.",
			);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const clearError = useCallback(() => setError(null), []);

	return { isLoading, error, forgotPassword, clearError };
}
