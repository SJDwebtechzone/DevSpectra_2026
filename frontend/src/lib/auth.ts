export const AUTH_TOKEN_KEY = "portfolio_admin_token";
export const AUTH_USER_KEY = "portfolio_admin_user";

export const setAuthSession = (token: string, user: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  }
};

export const clearAuthSession = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
  }
};

export const getAuthToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }
  return null;
};

export const getAuthUser = () => {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem(AUTH_USER_KEY);
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const isAuthenticated = () => {
  return !!getAuthToken();
};
