// app/_layout.jsx
import { Stack, useRouter, useSegments } from 'expo-router';
import '../global.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  return (
    <AuthProvider>
      <ConditionalStack />
    </AuthProvider>
  );
}

function ConditionalStack() {
  const { isAuth, loading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  // Redirect logic
  useEffect(() => {
    if (loading) return;

    const current = segments[0]; 
    const isInPublicPages = current === '(auth)';
    const isInTabs = current === '(tabs)';

    if (!isAuth && !isInPublicPages) {
      router.replace('/(auth)'); // Redirect to index page
    }

    if (isAuth && !isInTabs) {
      router.replace('/(tabs)'); // Redirect to tabs when authenticated
    }
  }, [isAuth, loading, segments]);

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <>
          {/* Authenticated routes only */}
          <Stack.Screen name="(tabs)" />
        </>
      ) : (
        <>
          {/* Public routes only */}
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
        </>
      )}
    </Stack>
  );
}
