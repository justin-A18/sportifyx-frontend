import { useCallback, useState } from "react";
import type { RegisterInput } from "../schema/auth-schema";

interface UseRegisterReturn {
	isLoading: boolean;
	error: string | null;
	register: (input: RegisterInput) => Promise<void>;
	clearError: () => void;
}

export function useRegister(): UseRegisterReturn {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const register = useCallback(async (_input: RegisterInput) => {
		setIsLoading(true);
		setError(null);

		try {
			// TODO: replace with actual auth API call
			await new Promise((r) => setTimeout(r, 1500));
		} catch {
			setError("Error al crear la cuenta. Intente de nuevo.");
		} finally {
			setIsLoading(false);
		}
	}, []);

	const clearError = useCallback(() => setError(null), []);

	return { isLoading, error, register, clearError };
}
