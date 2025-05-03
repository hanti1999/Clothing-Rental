'use client';
import { signInWithCredentials } from '@/lib/actions/auth';
import { signInSchema } from '@/lib/validations';
import AuthForm from '@/components/AuthForm';

const Page = () => (
  <AuthForm
    type='SIGN_IN'
    schema={signInSchema}
    defaultValues={{ email: '', password: '' }}
    onSubmit={signInWithCredentials}
  />
);

export default Page;
