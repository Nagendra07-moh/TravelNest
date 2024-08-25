import { StyleSheet, Text, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import WidthSpacer from "./WidthSpacer";
import ReusableText from "./ReusableText";

const Rating = ({ rating }) => {
  return (
    <View style={reusable.rowWithSpace("flex-start")}>
      <WidthSpacer Width={15} />
      <MaterialCommunityIcons name="star" size={20} color={"#FD9942"} />
      <WidthSpacer Width={5} />
      <ReusableText
        text={rating}
        Family={"medium"}
        Size={14}
        Color={"#FD9942"}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
