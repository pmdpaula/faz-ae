import { StyleSheet } from "react-native";

import theme from "../../globals/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 8,

    borderRadius: theme.border.radius,
    borderWidth: theme.border.width,

    padding: 12,
    paddingLeft: 8,

    backgroundColor: theme.colors.gray[500],
  },
  titleWrapper: {
    width: "100%",
  },
  title: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 14,

    marginHorizontal: 8,
  },
  deleteBox: {
    width: 32,
    height: 32,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 4,
  },
});
