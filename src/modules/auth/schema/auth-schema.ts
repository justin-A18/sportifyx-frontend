import { z } from "zod";

export const loginSchema = z.object({
	email: z
		.string()
		.email("Correo electrónico inválido")
		.min(1, "El correo electrónico es requerido"),
	password: z.string().min(1, "La contraseña es requerida"),
});

export const registerSchema = z
	.object({
		fullName: z
			.string()
			.min(2, "El nombre debe tener al menos 2 caracteres")
			.max(100, "El nombre es demasiado largo"),
		email: z
			.string()
			.email("Correo electrónico inválido")
			.min(1, "El correo electrónico es requerido"),
		password: z
			.string()
			.min(8, "Mínimo 8 caracteres")
			.regex(/[A-Z]/, "Debe contener una mayúscula")
			.regex(/[0-9]/, "Debe contener un número"),
		confirmPassword: z.string().min(1, "Confirme su contraseña"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.email("Correo electrónico inválido")
		.min(1, "El correo electrónico es requerido"),
});

export const resetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(8, "Mínimo 8 caracteres")
			.regex(/[A-Z]/, "Debe contener una mayúscula")
			.regex(/[0-9]/, "Debe contener un número"),
		confirmPassword: z.string().min(1, "Confirme su contraseña"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas no coinciden",
		path: ["confirmPassword"],
	});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
