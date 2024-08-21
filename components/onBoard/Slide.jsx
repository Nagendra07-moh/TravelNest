import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./slide.style";
import { ReusableText, ReusableBtn, HeightSpacer } from "../../components";
import { COLORS, SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Slide = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          Family={"medium"}
          Size={SIZES.xxLarge}
          Color="white"
        />
        <HeightSpacer Height={40} />

        <ReusableBtn
          onPress={() => navigation.navigate("Bottom")}
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
