import React from 'react';
import { useForm } from 'react-hook-form';

type FormProps = {
  onSubmit: (data: any) => void;
  defaultValues?: Record<never, never>;
  children?: JSX.Element | JSX.Element[];
};

export default function Form({ defaultValues, children, onSubmit }: FormProps) {
  const { handleSubmit, register } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
}
