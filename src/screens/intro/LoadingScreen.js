import React, { useEffect, useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import { useTheme } from "react-native-paper";

export default function LoadingScreen() {
  const theme = useTheme();

  // Animated values
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial scale is 1
  const bgColorAnim = useRef(new Animated.Value(0)).current; // Initial background color is white (0)

  useEffect(() => {
    // Delay small before starting the animation
    const timer = setTimeout(() => {
      Animated.parallel([
        // Scale animation
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 2000,
          useNativeDriver: true,
        }),
        // Background color animation
        Animated.timing(bgColorAnim, {
          toValue: 1, // (fully primary)
          duration: 2000,
          useNativeDriver: false,
        }),
      ]).start();
    }, 4000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [scaleAnim, bgColorAnim]);

  // Interpolate the background color from white to blue
  const backgroundColor = bgColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.secondary, theme.colors.primary],
  });

  return (
    <Animated.View style={{ ...styles.container, backgroundColor }}>
      <Animated.Image
        source={require("@/images/kredi-logo.png")}
        style={{ transform: [{ scale: scaleAnim }] }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
