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
      <View className="px-6 pb-24 ">
        <Pressable onPress={() => router.push("/login")} className="mb-4 bg-[#6e3b6e] flex justify-center items-center  p-3 rounded-xl">
          <Text className="text-white text-lg font-semibold tracking-wide">
            Login
          </Text>
        </Pressable>

        <Pressable className="bg-[#6e3b6e] flex justify-center items-center p-3 rounded-xl" onPress={() => router.push("/register")}>
          <Text className="text-white text-lg font-semibold tracking-wide">
            Register
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
