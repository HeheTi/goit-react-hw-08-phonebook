const getName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getMail = state => state.auth.user.mail;
const getCurrentUser = state => state.auth.isFetchingCurrentUser;
const getIsLoggedIn = state => state.auth.isLoggedIn;

export { getName, getToken, getMail, getCurrentUser, getIsLoggedIn };
