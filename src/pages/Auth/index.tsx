import { useState } from 'react';
import { Outlet } from 'react-router';
import * as Yup from 'yup';

import { MdPerson, MdSearch } from 'react-icons/md';

import { Form, Input } from '@/components/Form';

import * as S from './styles';
import regex from '@/helpers/regex';

type Data = {
  username: string;
  password: string;
};

export const Auth = () => {
  const [data, setData] = useState<Data>({} as Data);

  const schema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().matches(regex.password).required(),
  });

  const onSubmit = ({ username, password }: Data) => {
    console.log({ username, password });
  };

  return (
    <S.Container>
      <Form onSubmit={onSubmit} data={data} schema={schema}>
        <Input
          name="username"
          placeholder="Username"
          icon={<MdPerson size={20} color="#6C6C80" />}
        />
        <Input
          name="email"
          placeholder="Username"
          icon={<MdPerson size={20} color="#6C6C80" />}
        />
        <Input name="password" placeholder="Password" />

        <button>Submit</button>
      </Form>
      <Outlet />
    </S.Container>
  );
};
