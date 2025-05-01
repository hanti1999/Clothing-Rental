import { zodResolver } from '@hookform/resolvers/zod';
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { ZodType } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { FIELD_NAMES, FIELD_TYPES } from '@/constants';
import ImageUpload from './ImageUpload';

interface IProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: 'SIGN_IN' | 'SIGN_UP';
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: IProps<T>) => {
  const isSignIn = type === 'SIGN_IN';
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {};

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold text-white'>
        {isSignIn ? 'Chào mừng trở lại' : 'Chào mừng bạn đến với chúng tôi'}
      </h1>
      <p className='text-light-100'>
        {isSignIn ? 'Đăng nhập để tiếp tục' : 'Đăng ký ngay'}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='space-y-6 w-full'
        >
          {Object.keys(defaultValues).map((field, index) => (
            <FormField
              key={index}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name === 'profileImage' ? (
                      <ImageUpload />
                    ) : (
                      <Input
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        className='form-input'
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type='submit' className='form-btn'>
            {isSignIn ? 'Đăng nhập' : 'Đăng ký'}
          </Button>
        </form>
      </Form>
      <p className='text-center text-base font-medium'>
        {isSignIn ? 'Lần đầu ghé thăm? ' : 'Đã có tài khoản? '}
        <Link
          href={isSignIn ? '/sign-up' : '/sign-in'}
          className='text-primary font-bold'
        >
          {isSignIn ? 'Đăng ký ngay' : 'Đăng nhập'}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
