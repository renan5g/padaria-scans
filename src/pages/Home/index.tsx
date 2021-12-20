import Form from './Form/Form';
import { Input } from './Form/Input';
import { Select } from './Form/Select';

type IData = {
  username: string;
  password: string;
  sex: string;
};

export function Home() {
  const onSubmit = (data: IData) => alert(JSON.stringify(data));

  return (
    <>
      <h1>Smart Form Component</h1>
      <Form onSubmit={onSubmit}>
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" />
        <Select name="sex" options={['female', 'male', 'outer']} />

        <button>Submit</button>
      </Form>
    </>
  );
}
