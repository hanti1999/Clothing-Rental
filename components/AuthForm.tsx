import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';
import { DefaultValues, FieldValues, Path } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ZodType } from 'zod';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { FormLabel, FormMessage } from '@/components/ui/form';
import { CONVERT_FIELD_TYPES as CFT } from '@/constants';
import { CONVERT_FIELD_NAME as CFN } from '@/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FileUpload from './FileUpload';

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
  const router = useRouter();
  const isSignIn: boolean = type === 'SIGN_IN';
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);
    if (result.success) {
      router.push('/');
    } else {
      toast.error(`Lỗi ${isSignIn ? 'đăng nhập' : 'đăng ký'} `);
    }
  };

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
                  <FormLabel>{CFN[field.name as keyof typeof CFN]}</FormLabel>
                  <FormControl>
                    {field.name === 'profileImage' ? (
                      <FileUpload
                        type='image'
                        accept='image/*'
                        placeholder='Chọn ảnh đại diện'
                        folder='ids'
                        variant='dark'
                        onFileChange={field.onChange}
                      />
                    ) : (
                      <Input
                        required
                        type={CFT[field.name as keyof typeof CFT]}
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
