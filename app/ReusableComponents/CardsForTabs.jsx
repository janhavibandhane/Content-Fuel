import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
export default function CardsForTabs({ img, text }) {
  return (
    <View className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
      <Image
        source={{ uri: img }}
        className="w-full h-full absolute"
        resizeMode="cover"
      />
       <LinearGradient
        colors={["#6366f1AA", "#ec4899AA"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="absolute inset-0"
      />
      <Text className="text-white text-xl font-bold text-center leading-relaxed mt-2">
        {text}
      </Text>
    </View>
  );
}
