import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button
        title="Go to Animated Example"
        onPress={() => router.push("/animated")}
      />
      <Button
        title="Go to Renimated Example"
        onPress={() => router.push("/reanimated")}
      />
      <Button
        title="Go to Layout Animation Example"
        onPress={() => router.push("/layout-animation")}
      />
      <Button
        title="Go to Gesture Layout Animation Example"
        onPress={() => router.push("/gesture-layout")}
      />
      <Button
        title="Go to Manual Gestures Animation Example"
        onPress={() => router.push("/manual-gesture")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});
