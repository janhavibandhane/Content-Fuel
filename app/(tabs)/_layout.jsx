import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // This hides all titles
        tabBarActiveTintColor: "#6e3b6e",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 10,
          height: 90,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="travel"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons name="airplane" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="fashion"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons name="shirt" size={size} color={color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="fitness"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIconContainer}>
              <MaterialCommunityIcons
                name="dumbbell"
                size={size}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons name="chatbubble" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabIconContainer}>
              <Ionicons name="person" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarButton: () => null,
          tabBarItemStyle: { display: "none" }, // 👈 hides the space
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  },
  centerTab: {
    top: -20,
    justifyContent: "center",
    alignItems: "center",
  },
  mainActionButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#6e3b6e",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
