import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile";

const Recommendation = () => {
  const navigation = useNavigation();
  const recommendations = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Walt Disney World",
      location: "USA",
      imageUrl:
        "https://i0.wp.com/magicguides.com/wp-content/uploads/photo-gallery/Castle-Image-2020-04.jpg?bwg=1608037721",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Statue of Liberty",
      location: "USA",
      imageUrl:
        "https://cdn.pixabay.com/photo/2013/06/02/08/49/new-york-115626_640.jpg",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Golden Gate Bridge",
      location: "USA",
      imageUrl:
        "https://t3.ftcdn.net/jpg/02/64/88/04/360_F_264880447_47EBgqWIUP1qlfyOSo1Gi79eWR9YzQBu.jpg",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Yellowstone National Park",
      location: "USA",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/07/11/19/41/yellowstone-2494789_640.jpg",
      rating: 4.8,
      review: "24455 Reviews",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      location: "USA",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgLms_Ee4vJYzEJvJRk_ifUEQw50TnTzEIMQ&s",
      title: "Taj Mahal ",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];

  return (
    <View style={styles.cointaner}>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"Recommendations"}
          Family={"medium"}
          Size={TEXT.large}
          Color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ReusableTile
            item={item}
            onPress={() => {
              navigation.navigate("PlaceDetails", item._id);
            }}
          />
        )}
      />
    </View>
  );
};

export default Recommendation;

const styles = StyleSheet.create({
  cointaner: {
    paddingTop: 30,
  },
});
