import { StyleSheet } from "react-native";

const reusable = StyleSheet.create({
  cointaner: {
    flex: 1,
    marginHorizontal: 20,
  },
  rowWithSpace: (justifyContent) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justifyContent,
  }),
});

export default reusable;
