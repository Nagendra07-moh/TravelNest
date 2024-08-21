import { Text, StyleSheet } from "react-native";
import React from "react";

const ReusableText = ({ text, Family, Size, Color, align }) => {
  return (
    <Text style={styles.testStyles(Family, Size, Color, align)}>{text}</Text>
  );
};

export default ReusableText;
const styles = StyleSheet.create({
  testStyles: (Family, Size, Color, align) => ({
    fontFamily: Family,
    fontSize: Size,
    color: Color,
    textAlign: align,
  }),
});
