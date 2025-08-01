import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ImageBackground, Pressable, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/0e/ec/20/0eec20ef63f38044de8e938ea933c220.jpg",
      }}
      className="flex-1"
      resizeMode="cover"
    >
      {/* Dark overlay */}
      <View className="absolute inset-0 bg-black/60" />

      {/* App title */}
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-5xl font-extrabold text-white tracking-widest drop-shadow-md">
          ContentFuel
        </Text>
        <Text className="text-base text-white/70 mt-2">
          Fuel your content creation journey
        </Text>
      </View>

      {/* Bottom buttons */}
      <View className="px-6 pb-24">
        <Pressable onPress={() => router.push("/login")} className="mb-4">
          <LinearGradient
            colors={["#6366f1", "#ec4899"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              paddingVertical: 14,
              borderRadius: 9999,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 5,
            }}
          >
            <Text className="text-white text-lg font-semibold tracking-wide">
              Login
            </Text>
          </LinearGradient>
        </Pressable>

        <Pressable onPress={() => router.push("/register")}>
          <LinearGradient
            colors={["#ec4899", "#6366f1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              paddingVertical: 14,
              borderRadius: 9999,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 5,
            }}
          >
            <Text className="text-white text-lg font-semibold tracking-wide">
              Register
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
