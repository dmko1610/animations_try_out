import { Button, StyleSheet, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withReanimatedTimer,
  withRepeat,
  withSpring,
  withTiming
} from "react-native-reanimated";

export default function Reanimated() {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const fadeIn = () => {
    opacity.value = withTiming(1, { duration: 500, easing: Easing.ease });
  };

  const fadeOut = () => {
    opacity.value = withTiming(0, { duration: 500, easing: Easing.ease });
  };

  const scaleUp = () => {
    scale.value = withSpring(1.5, { damping: 1 });
  };

  const scaleDown = () => {
    scale.value = withSpring(1, { damping: 1 });
  };

  const startRotation = () => {
    rotate.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.linear }),
      -1,
      false
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }]
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Scale Up" onPress={scaleUp} />
        <Button title="Scale Down" onPress={scaleDown} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Start Rotation" onPress={startRotation} />
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
    backgroundColor: "skyblue",
    marginBottom: 20,
    borderRadius: 10
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 5
  }
});
