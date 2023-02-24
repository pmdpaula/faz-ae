import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import theme from "../../globals/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerWrapper: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: theme.colors.background1,

    width: "100%",
    height: 173,
    marginTop: 40,
  },
  contentWrapper: {
    width: "100%",

    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,

    backgroundColor: theme.colors.background2,
  },
  formWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: RFPercentage(-4),
  },
  input: {
    flex: 1,
    height: 54,

    backgroundColor: "#262626",
    borderRadius: theme.border.radius,
    borderWidth: theme.border.width,
    borderColor: theme.colors.secondary,

    padding: 16,
    marginRight: 4,

    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.gray[100],
  },
  buttonAdd: {
    width: 54,
    height: 54,

    backgroundColor: theme.colors.primaryDark,
    borderRadius: theme.border.radius,

    alignItems: "center",
    justifyContent: "center",
  },
  todoListHeader: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    height: 40,
    marginTop: 32,
  },
  todoListContent: {
    width: "100%",
  },
  contentSeparator: {
    borderBottomColor: theme.colors.gray[400],
    borderBottomWidth: theme.border.width,

    marginTop: 20,
  },
  todoListEmptyWrapper: {
    width: "100%",
    alignItems: "center",

    borderTopColor: theme.colors.gray[400],
    borderTopWidth: theme.border.width,
    marginTop: 20,

    paddingHorizontal: 20,
    paddingVertical: 48,
  },
  todoListEmpty1: {
    width: "100%",

    fontFamily: theme.fonts.bold,
    color: theme.colors.gray[300],
    textAlign: "center",

    marginTop: 16,
  },
  todoListEmpty2: {
    width: "100%",
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray[300],
    textAlign: "center",
  },
  todoListWrapper: {
    width: "100%",
    marginTop: 20,

    alignItems: "center",
    justifyContent: "flex-start",
  },
});
