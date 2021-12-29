import { useState } from 'react';
import * as Yup from 'yup';

import { MdPerson } from 'react-icons/md';

import { Form, Input } from '@/components/Form';

type IData = {
  username: string;
  password: string;
};

export function Home() {
  const [data, setData] = useState<IData>({} as IData);

  const schema = Yup.object().shape({
    username: Yup.string().required('Usuario é obrigatório'),
    password: Yup.string().required('Informe sua senha'),
  });

  const onSubmit = (data: IData) => alert(JSON.stringify(data));

  return (
    <>
      <h1>Smart Form Component</h1>
      <Form onSubmit={onSubmit} data={data} schema={schema}>
        <Input
          name="username"
          placeholder="Username"
          icon={<MdPerson size={20} color="#6C6C80" />}
        />
        <Input name="password" placeholder="Password" />

        <button>Submit</button>
      </Form>
    </>
  );
}
