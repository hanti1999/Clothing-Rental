'use client';
import { signUpSchema } from '@/lib/validations';
import AuthForm from '@/components/AuthForm';

const Page = () => (
  <AuthForm
    type='SIGN_UP'
    schema={signUpSchema}
    defaultValues={{ email: '', password: '', fullName: '', profileImage: '' }}
    onSubmit={() => {}}
  />
);

export default Page;
