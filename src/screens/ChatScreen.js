import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  FlatList, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity 
} from 'react-native';
import { Colors, Typography } from '../theme/theme';
import { ChatAPI } from '../api/rubyClient';
import RubyOrb from '../components/RubyOrb';

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! I am Ruby. How can I assist you today?', sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const flatListRef = useRef();

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    try {
      const response = await ChatAPI.sendMessage(input);
      const aiMsg = { id: (Date.now() + 1).toString(), text: response.reply, sender: 'ai' };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e) {
      setMessages(prev => [...prev, { id: 'err', text: 'Sorry, I encountered a connection error.', sender: 'ai' }]);
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageBubble, item.sender === 'user' ? styles.userBubble : styles.aiBubble]}>
      <Text style={[styles.messageText, item.sender === 'user' ? styles.userText : styles.aiText]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={Typography.header}>Ruby AI</Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.list}
        onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Message Ruby..."
          placeholderTextColor="#666"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>

      <RubyOrb onTrigger={() => alert('Voice activation triggered!')} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { 
    paddingTop: 50, 
    paddingBottom: 20, 
    paddingHorizontal: 20, 
    backgroundColor: Colors.surface, 
    alignItems: 'center', 
    borderBottomWidth: 1, 
    borderBottomColor: Colors.border 
  },
  list: { flex: 1, padding: 20 },
  messageBubble: { 
    padding: 12, 
    borderRadius: 18, 
    marginBottom: 10, 
    maxWidth: '80%' 
  },
  userBubble: { 
    alignSelf: 'flex-end', 
    backgroundColor: Colors.primary 
  },
  aiBubble: { 
    alignSelf: 'flex-start', 
    backgroundColor: Colors.surface, 
    borderWidth: 1, 
    borderBottomLeftRadius: 2 
  },
  messageText: { fontSize: 16 },
  userText: { color: '#FFF' },
  aiText: { color: Colors.textLight },
  inputContainer: { 
    flexDirection: 'row', 
    padding: 15, 
    backgroundColor: Colors.surface, 
    borderTopWidth: 1, 
    borderTopColor: Colors.border 
  },
  input: { 
    flex: 1, 
    backgroundColor: Colors.dark, 
    color: '#FFF', 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    borderRadius: 25, 
    marginRight: 10,
    borderWidth: 1,
    borderColor: Colors.border
  },
  sendButton: { 
    backgroundColor: Colors.primary, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 25, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  sendButtonText: { color: '#FFF', fontWeight: 'bold' },
});

export default ChatScreen;
