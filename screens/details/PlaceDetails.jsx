import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const PlaceDetails = () => {
  const route = useRoute();
  const id = route.params;
  return (
    <View>
      <Text>PlaceDetails</Text>
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({});
