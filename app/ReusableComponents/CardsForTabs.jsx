import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View, Pressable } from "react-native";

export default function CardsForTabs({ img, text, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full h-52 rounded-2xl overflow-hidden mb-6 shadow-lg"
      style={{
        elevation: 6, // for Android shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      }}
    >
      <Image
        source={{ uri: img }}
        className="w-full h-full absolute"
        resizeMode="cover"
      />

      {/* Gradient Overlay */}
      <LinearGradient
        colors={["#00000066", "#000000AA"]}
        start={{ x: 0, y: 0.4 }}
        end={{ x: 0, y: 1 }}
        className="absolute inset-0"
      />

      {/* Text Content */}
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-white text-2xl font-extrabold text-center leading-snug">
          {text}
        </Text>
      </View>
    </Pressable>
  );
}
