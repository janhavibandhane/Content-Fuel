// app/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Add this

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const userData = await AsyncStorage.getItem('user');
        setIsAuth(!!token);
        setUser(userData ? JSON.parse(userData) : null);
      } catch (error) {
        console.error('Error loading auth data:', error);
        setIsAuth(false);
      } finally {
        setLoading(false); // ✅ Important
      }
    };

    loadAuthData();
  }, []);

  const signIn = async (token, userData) => {
    try {
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setIsAuth(true);
      setUser(userData);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      setIsAuth(false);
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
