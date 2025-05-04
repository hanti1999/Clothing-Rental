import { z } from 'zod';
// dùng cho form của Chadcn

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  profileImage: z.string(),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
