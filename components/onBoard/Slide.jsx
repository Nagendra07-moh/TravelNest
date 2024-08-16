import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./slide.style";
import { ReusableText, ReusableBtn } from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";

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
        <ReusableBtn
          onPress={() => console.warn("Reuseable Btn")}
          btnText={"Let's GO!"}
          width={(SIZES.width - 50) / 2.2}
          backgroundColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slide;
