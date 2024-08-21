import { StyleSheet, Image } from "react-native";
import React from "react";

const NetworkImage = ({ source, width, height, radius }) => {
  return (
    <Image
      source={{
        uri: source,
      }}
      style={styles.image(height, width, radius)}
    />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (height, width, radius) => ({
    height: height,
    width: width,
    borderRadius: radius,
    resizeMode: "cover",
  }),
});
