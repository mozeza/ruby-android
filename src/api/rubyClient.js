import axios from 'axios';

const BASE_URL = 'https://api.ruby-ai.internal'; // Placeholder for Ruby AI Backend

export const ChatAPI = {
  async sendMessage(message, context = {}) {
    try {
      const response = await axios.post(`${BASE_URL}/chat`, {
        text: message,
        context: context,
        timestamp: new Date().toISOString(),
      });
      return response.data;
    } catch (error) {
      console.error('ChatAPI Error:', error);
      throw error;
    }
  },

  async streamResponse(message, onChunk) {
    // Logic for SSE or WebSocket streaming
    console.log('Streaming response for:', message);
  }
};

export const FederationBridge = {
  async executeAction(actionId, params) {
    try {
      const response = await axios.post(`${BASE_URL}/federation/execute`, {
        actionId,
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Federation Bridge Error:', error);
      throw error;
    }
  }
};
