import { Outlet } from 'react-router';

import * as S from './styles';

export const Auth = () => {
  return (
    <S.Container>
      <h1>Login</h1>
      <Outlet />
    </S.Container>
  );
};
