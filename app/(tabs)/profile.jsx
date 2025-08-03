import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, View, ActivityIndicator } from "react-native";
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user !== null) {
      setLoading(false);
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut();
      router.replace("/(auth)");
    } catch (error) {
      Alert.alert("❌ Logout failed", "Please try again");
    }
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#6366f1" />
        <Text className="text-gray-500 mt-4 text-lg">Loading profile...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <LinearGradient
        colors={["#6366f1", "#ec4899"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="h-72 w-full items-center justify-center rounded-b-3xl shadow-md"
      >
        <View className="w-28 h-28 rounded-full bg-white items-center justify-center shadow-md">
          <View className="w-24 h-24 rounded-full bg-purple-100 items-center justify-center">
            <Text className="text-4xl font-bold text-purple-700">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </Text>
          </View>
        </View>
        <Text className="text-white text-2xl font-bold mt-4">
          {user?.name || "User"}
        </Text>
      </LinearGradient>

      {/* User Info */}
      <View className="px-6 mt-8 ">
        <View className="bg-gray-100 p-4 rounded-xl shadow-sm mb-5">
          <Text className="text-gray-600 text-sm">📧 Email</Text>
          <Text className="text-gray-800 text-lg font-medium">{user?.email}</Text>
        </View>
        {user?.content ? (
          <View className="bg-gray-100 p-4 rounded-xl shadow-sm mb-5">
            <Text className="text-gray-600 text-sm">📄 Bio</Text>
            <Text className="text-gray-800 text-lg font-medium">{user.content}</Text>
          </View>
        ) : null}
        {user?.instaId ? (
          <View className="bg-gray-100 p-4 rounded-xl shadow-sm mb-5">
            <Text className="text-gray-600 text-sm">📸 Instagram</Text>
            <Text className="text-gray-800 text-lg font-medium">@{user.instaId}</Text>
          </View>
        ) : null}
      </View>

      {/* Logout Button */}
      <View className="mt-10 px-6">
        <Pressable
          onPress={handleLogout}
          className="w-full rounded-full overflow-hidden shadow-lg"
        >
          <LinearGradient
            colors={["#6366f1", "#ec4899"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-4 items-center rounded-full"
          >
            <Text className="text-white text-lg font-bold tracking-wide">
              Log Out
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}
