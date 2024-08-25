import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import reusable from "../../components/Reusable/reusable.style";
import {
  HeightSpacer,
  Places,
  ReusableText,
  Recommendation,
} from "../../components";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.cointaner}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hey Nagendra!"}
            Family={"regular"}
            Size={TEXT.large}
            Color={COLORS.black}
          />
          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={26} />
          </TouchableOpacity>
        </View>
        <HeightSpacer Height={SIZES.small} />
        <ReusableText
          text={"Places"}
          Family={"medium"}
          Size={TEXT.large}
          Color={COLORS.black}
        />
        <Places />
      </View>
    </SafeAreaView>
  );
};

export default Home;
