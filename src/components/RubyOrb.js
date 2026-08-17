import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Colors } from '../theme/theme';

const RubyOrb = ({ onTrigger }) => {
  const [scale] = useState(new Animated.Value(1));

  const animatePulse = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => animatePulse());
  };

  useEffect(() => {
    animatePulse();
  }, []);

  return (
    <TouchableOpacity onPress={onTrigger} style={styles.container}>
      <Animated.View style={[styles.orb, { transform: [{ scale }] }]}>
        <View style={styles.innerOrb} />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 1000,
  },
  orb: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  innerOrb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
  },
});

export default RubyOrb;
