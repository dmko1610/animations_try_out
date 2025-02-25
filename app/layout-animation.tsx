import { useState } from "react";
import { Button, StyleSheet, LayoutAnimation, View, Text } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

export default function LayoutAnimationExample() {
  const [expanded, setExpanded] = useState(false);
  const size = useSharedValue(0);

  const toggleExpansion = () => {
    size.value = expanded ? 0 : 200;
    setExpanded(!expanded);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(size.value, {
        duration: 500,
        easing: Easing.ease
      }),
      height: withTiming(size.value, {
        duration: 500,
        easing: Easing.ease
      })
    };
  });

  return (
    <View style={styles.container}>
      <Button title="Toggle" onPress={toggleExpansion} />
      <Animated.View style={[styles.box, animatedStyle]}>
        <Text style={styles.text}>This box is expanding!</Text>
      </Animated.View>
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
    backgroundColor: "skyblue",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
