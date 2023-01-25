import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggenIn);
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const user = useSelector(authSelectors.getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
