const getIsLoggenIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

export const getIsRefreshing = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggenIn,
  getUser,
  getIsRefreshing,
};

export default authSelectors;
