import { object, string } from 'zod'

export const loginSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters')
})
export const registerSchema = object({
  email: string({ required_error: 'Email is required' }).min(1, 'Email is required').email('Invalid email'),
  password: string({ required_error: 'Password is required' }).min(1, 'Password is required').min(8, 'Password must contain 3 characters').max(32, 'Password cannot contain more than 32 characters'),
  name: string({ required_error: 'Name is required' }).min(1, 'Name is required').min(3, 'Name must contain 3 characters').max(20, 'Name cannot contain more than 20 characters')
})
