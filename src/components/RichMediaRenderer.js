import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '../theme/theme';

const RichMediaRenderer = ({ content }) => {
  if (!content) return null;

  if (content.type === 'image') {
    return <Image source={{ uri: content.url }} style={styles.image} />;
  }

  if (content.type === 'video') {
    return (
      <View style={styles.videoPlaceholder}>
        <Text style={styles.videoText}>🎥 Video Content: {content.title}</Text>
      </View>
    );
  }

  if (content.type === 'action_card') {
    return (
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{content.title}</Text>
        <Text style={styles.cardDesc}>{content.description}</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  image: { width: '100%', height: 200, borderRadius: 10, marginVertical: 10 },
  videoPlaceholder: { 
    backgroundColor: '#000', 
    padding: 20, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginVertical: 10 
  },
  videoText: { color: '#FFF' },
  card: { 
    backgroundColor: Colors.surface, 
    padding: 15, 
    borderRadius: 10, 
    borderLeftWidth: 4, 
    borderLeftColor: Colors.primary, 
    marginVertical: 10 
  },
  cardTitle: { color: '#FFF', fontWeight: 'bold', marginBottom: 5 },
  cardDesc: { color: '#AAA', fontSize: 14 },
});

export default RichMediaRenderer;
