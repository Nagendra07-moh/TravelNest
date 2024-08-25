import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import NetworkImage from "../../Reusable/NetworkImage";
import HeightSpacer from "../../Reusable/HeightSpacer";
import ReusableText from "../../Reusable/ReusableText";
import Rating from "../../Reusable/Rating";

const HotelCard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
      <View>
        <View style={{ height: 150, alignItems: "center", marginTop: 10 }}>
          <NetworkImage
            source={item.imageUrl}
            width={"90%"}
            height={"100%"}
            radius={16}
          />
        </View>
        <HeightSpacer Height={5} />
        <View style={{ padding: 10, alignItems: "center" }}>
          <ReusableText
            text={item.title}
            Family={"medium"}
            Size={SIZES.medium}
            Color={COLORS.black}
          />
          <HeightSpacer Height={5} />
          <ReusableText
            text={item.location}
            Family={"medium"}
            Size={SIZES.medium}
            Color={COLORS.gray}
          />
          <HeightSpacer Height={5} />
          <Rating rating={item.rating} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width / 2.2,
    height: 250,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    margin: margin,
  }),
  imageCointaner: {
    aliginItems: "center",
    justifyContent: "center",
    marginTop: 10,
    height: 150,
  },
});
