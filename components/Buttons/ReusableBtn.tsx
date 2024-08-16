import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";

const ReusableBtn = ({
  onPress,
  btnText,
  textColor,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
    >
      <Text style={styles.btnTextStyle(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnTextStyle: (textColor: any) => ({
    color: textColor,
    fontFamily: "medium",
    fontSize: SIZES.medium,
    alignSelf: "center",
  }),
  btnStyle: (
    width: any,
    backgroundColor: any,
    borderWidth: any,
    borderColor: any
  ) => ({
    width: width,
    backgroundColor: backgroundColor,
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
    borderColor: borderColor,
    borderWidth: borderWidth,
  }),
});
