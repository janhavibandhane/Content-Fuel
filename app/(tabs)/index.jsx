import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from 'react-native-vector-icons/Feather';
import { Link } from "expo-router";


const { width } = Dimensions.get("window");

export default function Index() {
const features = [
  { icon: <Feather name="zap" size={28} color="#4f46e5" />, title: "Reel Ideas" },
  { icon: <Feather name="edit-2" size={28} color="#4f46e5" />, title: "Captions" },
  { icon: <Feather name="hash" size={28} color="#4f46e5" />, title: "Hashtags" },
  { icon: <Feather name="music" size={28} color="#4f46e5" />, title: "Audio" },
];


  return (
    <LinearGradient
      colors={["#eef2ff", "#ffffff"]}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="flex items-center mt-20 space-y-6">
          {/* Title */}
          <Text className="text-4xl font-extrabold text-purple-700 mb-3">
            Content Fuel
          </Text>

          {/* Hero Image */}
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/6d/3f/e8/6d3fe8746c113a5628ae094c87b4f8dc.jpg",
            }}
            style={{
              width: width - 40,
              height: 200,
              borderRadius: 16,
            }}
          />

          {/* Headline */}
          <Text className="text-2xl font-bold text-center text-gray-800 px-4 mt-8">
            Supercharge Your Content Creation with AI Ideas
          </Text>

          {/* Subheadline */}
          <Text className="text-base text-gray-600 text-center px-4 mt-4">
            Instantly generate Reel ideas, captions, trending hashtags, and
            audio based on your niche — all powered by AI.
          </Text>

          {/* Features Grid */}
          <View className="w-full mt-10 flex-row flex-wrap justify-between gap-y-6">
            {features.map((feature, index) => (
              <View
                key={index}
                className="w-[48%] bg-white p-4 rounded-2xl shadow-md items-center"
              >
                {feature.icon}
                <Text className="mt-2 text-sm font-medium text-gray-800 text-center">
                  {feature.title}
                </Text>
              </View>
            ))}
          </View>

          {/* CTA Button */}
          <TouchableOpacity className="bg-purple-700 px-6 py-3 rounded-full mt-10">
            <Link href={'/chat'}><Text className="text-white text-lg font-semibold">Get Started</Text></Link>
          </TouchableOpacity>

          {/* Testimonial */}
          <Text className="italic text-center text-gray-500 mt-8 px-4">
            “The best tool I’ve used for content planning!”
          </Text>

          {/* Footer */}
          <Text className="text-xs text-gray-400 text-center mt-12 mb-8">
            v1.0 • Made with 💜 by Team
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
