import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import authStorage from '../utils/authStorage';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const decodedUser = jwtDecode(authToken);
    setUser(decodedUser);
    return authStorage.setToken(authToken);
  };

  const logout = () => {
    setUser(null);
    return authStorage.removeToken();
  };

  return { user, login, logout };
};

export default useAuth;
