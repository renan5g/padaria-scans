import { SelectHTMLAttributes } from 'react';

type SelectProps = {
  register?: any;
  name: string;
  options?: Array<any>;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ register, options, name, ...rest }: SelectProps) {
  return (
    <select {...register(name)} {...rest}>
      {options?.map((value, i) => (
        <option value={value} key={`${name}${i}`}>
          {value}
        </option>
      ))}
    </select>
  );
}
