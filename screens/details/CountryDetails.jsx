import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CountryDetails = () => {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View>
      <Text>CountryDetails</Text>
    </View>
  );
};

export default CountryDetails;
