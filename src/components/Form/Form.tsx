import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as Yup from 'yup';

type Props = {
  onSubmit: (data: any) => void;
  data: Record<never, never>;
  children?: JSX.Element | JSX.Element[];
  schema: Yup.ObjectSchema<any>;
};

export const Form = ({ onSubmit, data, children, schema }: Props) => {
  const {
    handleSubmit,
    getValues,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: data,
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* {Array.isArray(children)
        ? children?.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    getValue: getValues,
                    errors,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children} */}

      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: register,
                    getValue: getValues,
                    errors: errors,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};
