import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { BASE_URL } from "./constants/config";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("❗ Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}login`, { email, password });
      const token = res.data.token;
      const user = res.data.user;

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("user", JSON.stringify(user));

      Alert.alert("✅ Login successful");
      router.push("/home");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong. Please try again.";
      Alert.alert("❌ Login failed", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "android" ? 0 : 80}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <View className="bg-white rounded-3xl p-6 shadow-lg m-7  first-line:">
            {/* Logo */}
            <View className="items-center mb-6">
              <Text className="text-3xl font-extrabold text-violet-700">
                ContentFuel
              </Text>
              <Text className="text-base text-gray-600 mt-1">
                Login in 
              </Text>
            </View>

            {/* Inputs */}
            <View className="space-y-5">
              <TextInput
                className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 shadow-sm text-black mb-3"
                placeholder="login/e-mail"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 shadow-sm text-black"
                placeholder="password"
                placeholderTextColor="#aaa"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            {/* Login Button */}
            <View className="mt-6">
              <Pressable
                onPress={handleLogin}
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
                      Log In
                    </Text>
                  )}
                </LinearGradient>
              </Pressable>
            </View>

            {/* Forgot Password */}
            <Text className="text-center mt-3">
              Don't have account ? {""}
              <Text
                onPress={() => router.replace("/register")}
                className="text-blue-500 font-medium"
              >
                Register
              </Text>
            </Text>

            {/* Social Icons */}
            <View className="flex-row justify-center space-x-4 mt-6">
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/google-logo.png",
                }}
                className="w-8 h-8"
              />
              <Image
                source={{
                  uri: "https://img.icons8.com/color/48/facebook-new.png",
                }}
                className="w-8 h-8"
              />
              <Image
                source={{
                  uri: "https://img.icons8.com/ios-filled/50/mac-os.png",
                }}
                className="w-8 h-8"
              />
            </View>
          </View>
          <Text className="text-center text-sm text-gray-400 mt-10">
            © 2025 ContentFule Inc.
          </Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
