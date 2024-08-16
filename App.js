import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as Splashscreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native-stack";
const navigation = createStackNavigator();
export default function App() {
  const [fontsLoader] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    light: require("./assets/fonts/light.otf"),
    medium: require("./assets/fonts/medium.otf"),
    bold: require("./assets/fonts/bold.otf"),
    xtrabold: require("./assets/fonts/xtrabold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoader) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoader]);

  if (!fontsLoader) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.navigator></Stack.navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   textStyle: {
//     fontFamily: "bold",
//   },
// });
