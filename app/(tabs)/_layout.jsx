// app/(tabs)/_layout.jsx
import { Tabs, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

export default function TabsLayout() {
  const { isAuth } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isAuth === null) return; // Still loading
    const inAuthGroup = segments[0] === "(tabs)";
    if (!isAuth && inAuthGroup) {
      router.replace("/login");
    }
    
  }, [isAuth, segments]);
    

  if (isAuth === null) {
    return null; // Or a loading spinner
  }

  if (!isAuth) {
    return null; // Will be redirected by the useEffect
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="fashion" options={{ title: "Fashion" }} />
      <Tabs.Screen name="chat" options={{ title: "Chat" }} />
      <Tabs.Screen name="fitness" options={{ title: "Fitness" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
