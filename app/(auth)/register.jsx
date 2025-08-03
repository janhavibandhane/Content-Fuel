import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BASE_URL } from "../constants/config";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [instaId, setInstaId] = useState("");
  const [age, setAge] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password || !content || !instaId || !age) {
      Alert.alert("❗ All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}register`, {
        name,
        email,
        password,
        content,
        instaId,
        age,
      });

      const { token, user } = res.data;
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user));

      Alert.alert("✅ Registration successful");
      router.push("/home");
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong. Try again.";
      Alert.alert("❌ Registration failed", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // ✅ fixed typo
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ padding: 20,marginTop:90 }} // ✅ removed justifyContent: "center"
          keyboardShouldPersistTaps="handled" // ✅ fixed prop name
        >
          <View className="bg-white rounded-3xl p-6 shadow-lg m-1">
            <View className="items-center mb-10">
              <Text className="text-4xl font-extrabold text-violet-700">
                ContentFuel
              </Text>
              <Text className="text-base text-gray-600 mt-1">
                Create your account
              </Text>
            </View>

            <TextInput
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 text-black"
              placeholder="Name"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 text-black"
              placeholder="Email"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 text-black"
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 text-black"
              placeholder="Content Type (e.g. Reels, Posts)"
              placeholderTextColor="#999"
              value={content}
              onChangeText={setContent}
            />
            <TextInput
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4 text-black"
              placeholder="Instagram ID"
              placeholderTextColor="#999"
              autoCapitalize="none"
              value={instaId}
              onChangeText={setInstaId}
            />
            <TextInput
              className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-6 text-black"
              placeholder="Age"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />

            <View className="mt-6">
              <Pressable
                onPress={handleRegister}
                disabled={loading}
                className="w-full rounded-full overflow-hidden shadow-md"
              >
                <LinearGradient
                  colors={["#6366f1", "#ec4899"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="py-3 items-center rounded-full"
                >
                  {loading ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <Text className="text-white text-lg font-semibold">
                      Register
                    </Text>
                  )}
                </LinearGradient>
              </Pressable>
            </View>

            <Text className="text-sm text-gray-600 text-center mt-6">
              Already have an account?{" "}
              <Text
                onPress={() => router.replace("/login")}
                className="text-blue-700 font-medium"
              >
                Login
              </Text>
            </Text>
          </View>

          <Text className="text-center text-sm text-gray-400 mt-10">
            © 2025 ContentFuel Inc.
          </Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
