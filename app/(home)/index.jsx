import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  FlatList,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";

const niches = [
  "Fashion",
  "Travel",
  "Fitness",
  "Education",
  "Vlogs", 
];

const dummyHashtags = [
  "#ReelTrend",
  "#ExploreMore",
  "#InstaVibes",
  "#ViralNow",
  "#AIContent",
];

const dummyIdeas = [
  "Top 5 Summer Outfits",
  "Hidden Gems in [Location]",
  "Full-Body Workout Routine",
  "Explain a Complex Topic Simply",
  "Unfiltered Day in My Life",
];

export default function index() {
  const router = useRouter();
  const [selectedNiche, setSelectedNiche] = useState("Fashion");

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    Alert.alert("✅ Logged out");
    router.replace("/login");
  };

  return (
    <View className="flex-1 bg-white px-4 pt-10">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-blue-700">Welcome 👋</Text>
        <Pressable
          onPress={handleLogout}
          className="bg-red-500 px-3 py-1 rounded-md"
        >
          <Text className="text-white font-semibold">Logout</Text>
        </Pressable>
      </View>

      {/* Niche Picker */}
      <Text className="text-gray-600 mb-1 font-medium">Select your niche:</Text>
      <View className="border border-gray-300 rounded-lg mb-6 overflow-hidden">
        <Picker
          selectedValue={selectedNiche}
          onValueChange={(itemValue) => setSelectedNiche(itemValue)}
        >
          {niches.map((niche) => (
            <Picker.Item key={niche} label={niche} value={niche} />
          ))}
        </Picker>
      </View>

      {/* Hashtags */}
      <Text className="text-lg font-semibold text-gray-800 mb-2">
        🔥 Trending Hashtags
      </Text>
      <FlatList
        data={dummyHashtags}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text className="text-blue-600 text-base mb-1">• {item}</Text>
        )}
        className="mb-6"
      />

      {/* Reel Ideas */}
      <Text className="text-lg font-semibold text-gray-800 mb-2">
        🎥 Reel Ideas
      </Text>
      <FlatList
        data={dummyIdeas}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text className="text-gray-700 text-base mb-1">• {item}</Text>
        )}
        className="mb-6"
      />

      {/* Chat Button */}
      <Pressable
        onPress={() => router.push("/chat")}
        className="bg-blue-600 py-3 rounded-full items-center shadow-md"
      >
        <Text className="text-white text-lg font-semibold">💬 Start Chatting</Text>
      </Pressable>
    </View>
  );
}
