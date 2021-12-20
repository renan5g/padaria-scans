import { InputHTMLAttributes, ReactNode, useCallback, useState } from 'react';
import { FieldErrors } from 'react-hook-form';

import * as S from './styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  icon?: ReactNode;
  register?: any;
  getValue?: any;
  errors?: FieldErrors<any>;
};

export const Input = ({
  name,
  register,
  getValue,
  errors,
  icon: Icon,
  ...rest
}: Props) => {
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!getValue(name));
  }, []);

  return (
    <S.Container
      isFocused={isFocused}
      isFilled={isFilled}
      hasErrors={!!errors && errors[name]}
    >
      <input {...register(name)} onFocus={onFocus} onBlur={onBlur} {...rest} />

      {errors && errors[name] ? (
        <S.ErrorMessageText>{errors[name]?.message}</S.ErrorMessageText>
      ) : (
        Icon || <></>
      )}
    </S.Container>
  );
};
