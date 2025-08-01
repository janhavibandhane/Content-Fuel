import { useRef, useState } from "react";

import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const flatListRef = useRef(null); // Ref to control scrolling

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),

      text: input,

      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // Auto-scroll to the bottom after sending a message

    flatListRef.current.scrollToEnd({ animated: true });

    try {
      const response = await fetch("https://your-api-url.com/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      const botMessage = {
        id: Date.now().toString() + "_bot",

        text: data.reply || "No response",

        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);

      // Auto-scroll after receiving the bot's reply

      flatListRef.current.scrollToEnd({ animated: true });
    } catch (error) {
      console.error("Fetch error:", error);

      setMessages((prev) => [
        ...prev,

        {
          id: Date.now().toString() + "_err",

          text: "Error getting response",

          sender: "bot",
        },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-gray-100 mt-10"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <FlatList
        data={messages} //messages is the array of chat messages (user + bot).
        keyExtractor={(item) => item.id} //React Native needs a unique key for each item.
        ref={flatListRef} // Attach ref here
        className="flex-1 p-4"
        contentContainerStyle={{ paddingBottom: 80 }} // Adds padding for the keyboard
        onContentSizeChange={() => {
          flatListRef.current.scrollToEnd({ animated: true }); // Scroll to the end on content change
        }}
        renderItem={({ item }) => (
          <View
            className={`p-4 rounded-lg my-2 max-w-[80%] ${
              item.sender === "user"
                ? "bg-blue-400 self-end"
                : "bg-gray-300 self-start"
            }`}
          >
            <Text className="text-white text-base">{item.text}</Text>
          </View>
        )}
      />

      <View className="flex-row items-center p-4 bg-white border-t border-gray-300">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          className="flex-1 bg-gray-200 p-4 rounded-full text-lg"
        />

        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-full ml-2"
          onPress={handleSend}
        >
          <Text className="text-white font-semibold">Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
