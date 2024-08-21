import { Text, StyleSheet } from "react-native";
import React from "react";

const ReusableText = ({ text, Family, Size, Color }) => {
  return <Text style={styles.testStyles(Family, Size, Color)}>{text}</Text>;
};

export default ReusableText;
const styles = StyleSheet.create({
  testStyles: (Family, Size, Color) => ({
    fontFamily: Family,
    fontSize: Size,
    color: Color,
  }),
});
