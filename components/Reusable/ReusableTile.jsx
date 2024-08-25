import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import reusable from "./reusable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  ReusableText,
  WidthSpacer,
  Rating,
} from "../../components/index";
import { useNavigation } from "@react-navigation/native";

const ReusableTile = ({ item, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cointaner} onPress={onPress}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />
        <View>
          <ReusableText
            text={item.title}
            Family={"medium"}
            align={"center"}
            Size={SIZES.medium}
            Color={COLORS.black}
          />
          <HeightSpacer Height={8} />
          <ReusableText
            text={item.location}
            Family={"medium"}
            align={"center"}
            Size={14}
            Color={COLORS.gray}
          />
          <HeightSpacer Height={10} />
          <View style={reusable.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />
            <WidthSpacer Width={5} />
            <ReusableText
              text={` (${item.review}) `}
              Family={"medium"}
              Size={14}
              Color={COLORS.black}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  cointaner: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
