import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, TEXT } from "../../../constants/theme";
import { HeightSpacer, NetworkImage, ReusableText } from "../../../components";

const Country = ({ item }) => {
  return (
    <TouchableOpacity>
      <View>
        <NetworkImage
          source={item.imageUrl}
          width={85}
          height={85}
          radius={12}
        />
        <HeightSpacer Height={10} />
        <ReusableText
          text={item.country}
          Family={"regular"}
          Size={TEXT.medium}
          Color={COLORS.black}
          align="center"
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;
