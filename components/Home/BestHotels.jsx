import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import ReusableText from "../Reusable/ReusableText";
import reusable from "../Reusable/reusable.style";
import { useNavigation } from "@react-navigation/native";
import HotelCard from "../Tiles/Hotels/HotelCard";

const BestHotels = () => {
  const navigation = useNavigation();
  const hotels = [
    {
      _id: "64c674d23cfa5e847bcd5430",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Seaside Resort",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/34/8e/fb/sea-side-resort-and-spa.jpg?w=700&h=-1&s=1",
      rating: 4.9,
      review: "1204 Reviews",
      location: "Miami Beach, FL",
    },
    {
      _id: "64c675183cfa5e847bcd5433",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Mountain Lodge",
      imageUrl:
        "https://www.shutterstock.com/image-photo/emerald-lake-lodge-one-most-600nw-1290017986.jpg",
      rating: 4.5,
      review: "12024 Reviews",
      location: "Aspen, CO",
    },
    {
      _id: "64d0b5a4d3cb4985a76ac1aa",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Hotel Alpha",
      imageUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/03/1b/5c/hotel-alpha.jpg?w=500&h=-1&s=1",
      rating: 4.7,
      review: "1204 Reviews",
      location: "City Center, USA",
    },
    {
      _id: "64c675be3cfa5e847bcd5439",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Family-Friendly Resort",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYFnRn12RoQTdi8WfJBlg0r26_1A_AuxQ_yA&s",
      rating: 4.6,
      review: "12854 Reviews",
      location: "Orlando, FL",
    },
    {
      _id: "64c67442776ed29f19727fd7",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Luxury Hotel 1",
      imageUrl:
        "https://www.shutterstock.com/image-photo/real-estate-luxury-interior-exterior-260nw-660324757.jpg",
      rating: 4.7,
      review: "1204 Reviews",
      location: "New York City, NY",
    },
  ];
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      scrollNextItem();
    }, 2000); // change the time interval as needed

    return () => clearInterval(interval);
  }, [currentIndex]);
  const scrollNextItem = () => {
    if (flatListRef.current) {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= hotels.length) {
        nextIndex = 0; // Reset to the first item
      }

      flatListRef.current.scrollToIndex({
        animated: true,
        index: nextIndex,
      });

      setCurrentIndex(nextIndex);
    }
  };

  return (
    <View>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"NearBy Hotels"}
          Family={"medium"}
          Size={TEXT.large}
          Color={COLORS.black}
        />
        <TouchableOpacity onPress={() => {}}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={hotels}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        renderItem={({ item }) => (
          <HotelCard item={item} margin={2} onPress={() => {}} />
        )}
      />
    </View>
  );
};

export default BestHotels;

const styles = StyleSheet.create({});
