import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./slide.style";
import { ReusableText } from "../../components/index";
import { SIZES } from "../../constants/theme";

const Slide = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          Family={"medium"}
          Size={SIZES.xxLarge}
          Color="white"
        />
      </View>
    </View>
  );
};

export default Slide;
