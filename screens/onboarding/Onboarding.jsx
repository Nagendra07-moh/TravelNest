import { FlatList } from "react-native";
import React from "react";
import Slide from "../../components/onBoard/Slide";
const Onboarding = () => {
  const slides = [
    {
      id: 1,
      // image: require("../../assets/images/1.png"),
      image:
        "https://img2.wallspic.com/crops/0/2/0/6/7/176020/176020-lake_thun-lake_brienz-oeschinen_lake-travel-lake_bled-1080x1920.jpg",
      title: "Find Perfect Place to Stay!",
    },
    {
      id: 2,
      // image: require("../../assets/images/2.png"),
      image:
        "https://w0.peakpx.com/wallpaper/340/542/HD-wallpaper-resort-beach.jpg",
      title: "Discover The World",
    },
    {
      id: 3,
      // image: require("../../assets/images/3.png"),
      image: "https://wallpapercave.com/wp/wp10535409.jpg",
      title: "Find The Best Hotel In The World",
    },
  ];
  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Slide item={item} />}
    />
  );
};

export default Onboarding;
