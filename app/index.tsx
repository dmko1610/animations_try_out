import { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const fadeAnimation = useRef(new Animated.Value(1)).current;
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const colorAnimation = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false
    }).start();
  };

  const makeItYellow = () => {
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 0.5,
        duration: 500,
        useNativeDriver: false
      })
    ]).start();
  };

  const makeItGreen = () => {
    Animated.sequence([
      Animated.timing(colorAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false
      })
    ]).start();
  };

  const moveRight = () => {
    Animated.timing(moveAnimation, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  const moveLeft = () => {
    Animated.timing(moveAnimation, {
      toValue: -150,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["blue", "yellow", "green"]
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            backgroundColor,
            opacity: fadeAnimation,
            transform: [{ translateX: moveAnimation }]
          }
        ]}
      />
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Move Right" onPress={moveRight} />
        <Button title="Move Left" onPress={moveLeft} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Make it Yellow" onPress={makeItYellow} />
        <Button title="Make it Green" onPress={makeItGreen} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 30
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 5
  }
});
