import { InputHTMLAttributes } from 'react';

type InputProps = {
  register?: any;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ register, name, ...rest }: InputProps) {
  return (
    <div>
      <input {...register(name)} {...rest} />
    </div>
  );
}
