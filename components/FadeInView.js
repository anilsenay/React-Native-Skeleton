import React, { useRef, useEffect } from 'react';
import { Animated, Text, View } from 'react-native';

export default function FadeInView(props){
  const fadeAnim = useRef(new Animated.Value(0.4)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    fadeIn();
  }, [])

  const fadeIn = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000
      })
    ]).start(() => {
      fadeOut()
    });
  }

  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0.4,
        duration: 1000
      })
    ]).start(() => {
      fadeIn()
    });
  }
  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}