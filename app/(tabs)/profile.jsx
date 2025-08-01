import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
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
      router.replace("/login");
    } catch (error) {
      Alert.alert("❌ Logout failed", "Please try again");
    }
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-gray-500">Loading profile...</Text>
      </View>
    );
  }

  return (
    <View  className="flex-1 justify-center bg-white p-6">
      <View className="items-center mt-8 mb-10">
        <View className="w-32 h-32 rounded-full bg-purple-100 items-center justify-center mb-4">
          
            <Text className="text-4xl text-purple-700 font-bold">
              {user?.name?.[0]?.toUpperCase() || "U"}
            </Text>
         
        </View>
        
        <Text className="text-2xl font-bold text-gray-800 mb-1">
          {user?.name || "User"}
        </Text>
        <Text className="text-gray-500 mb-2">{user?.email || ""}</Text>
      </View>

     

      <View className="mt-8 px-4">
        <Pressable
          onPress={handleLogout}
          className="w-full rounded-full overflow-hidden shadow-md"
        >
          <LinearGradient
            colors={["#6366f1", "#ec4899"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="py-3 items-center rounded-full"
          >
            <Text className="text-white text-lg font-semibold">Log Out</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}