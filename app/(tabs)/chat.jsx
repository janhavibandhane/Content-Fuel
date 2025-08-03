import axios from "axios";
import { useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { BASE_URL } from "../constants/config";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const flatListRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    flatListRef.current?.scrollToEnd({ animated: true });

    try {
      const response = await axios.post(`${BASE_URL}send`, {
        message: input,
      });

      const data = response.data;

      const botMessage = {
        id: Date.now().toString() + "_bot",
        text: data.reply || "No response",
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
      flatListRef.current?.scrollToEnd({ animated: true });
    } catch (error) {
      console.error("Axios error:", error.message);
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
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            {/* Chat messages area */}
            <View style={styles.messagesContainer}>
              <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                ref={flatListRef}
                contentContainerStyle={styles.flatListContent}
                onContentSizeChange={() => {
                  flatListRef.current?.scrollToEnd({ animated: true });
                }}
                renderItem={({ item }) => (
                  <View
                    style={[
                      styles.messageBubble,
                      item.sender === "user"
                        ? styles.userMessage
                        : styles.botMessage,
                    ]}
                  >
                    <Text style={styles.messageText}>{item.text}</Text>
                  </View>
                )}
              />
            </View>

            {/* Input area */}
            <View style={styles.inputContainer}>
              <TextInput
                value={input}
                onChangeText={setInput}
                placeholder="Type a message..."
                style={styles.textInput}
                multiline
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={handleSend}
              >
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messagesContainer: {
    marginTop:20,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  botMessage: {
    backgroundColor: '#e5e5e5',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 120,
  },
  sendButton: {
    backgroundColor: '#6e3b6e',
    borderRadius: 20,
    padding: 12,
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});