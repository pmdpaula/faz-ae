import { StyleSheet } from "react-native";

import theme from "../../globals/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,

    marginRight: 8,
  },
  quantityTag: {
    backgroundColor: theme.colors.gray[400],
    borderRadius: 8,

    paddingHorizontal: 8,
    paddingVertical: 2,

    alignItems: "center",
  },
  quantityText: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.gray[200],
    fontSize: 12,
  },
});
