import React, { useRef, useEffect } from "react";
import { View, Text, Animated, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

export default function CardsForTabs({ prompts = [], img }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
        marginBottom: 20,
        borderRadius: 20,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.15,
        shadowRadius: 15,
        elevation: 8,
      }}
    >
      {/* Background Gradient */}
      <LinearGradient
        colors={["#f3e8ff", "#fdf4ff"]}
        style={{
          paddingVertical: 24,
          paddingHorizontal: 20,
          borderRadius: 20,
        }}
      >
        {/* Title */}
        <Text className="text-center text-purple-700 font-extrabold text-lg mb-5">
          🎯 Suggested Prompts:
        </Text>
        <Image
          source={{ uri: img }}
          style={{
            width: "100%",
            height: 180,
            borderRadius: 14,
            marginBottom: 16,
          }}
          resizeMode="cover"
        />
        {/* Prompts */}
        {prompts.map((prompt, index) => (
          <BlurView
            key={index}
            intensity={30}
            tint="light"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: 14,
              marginBottom: 10,
              paddingVertical: 12,
              paddingHorizontal: 16,
              alignSelf: "center",
              minWidth: "80%",
            }}
          >
            <Text className="text-center text-gray-800 text-base font-semibold">
              {prompt}
            </Text>
          </BlurView>
        ))}
      </LinearGradient>
    </Animated.View>
  );
}
