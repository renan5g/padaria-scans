import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export default () => {
  const signed = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};
