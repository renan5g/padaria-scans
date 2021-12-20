import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export default () => {
  const signed = true;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};
