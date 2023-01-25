const getIsLoggenIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

const authSelectors = {
  getIsLoggenIn,
  getUser,
};

export default authSelectors;
