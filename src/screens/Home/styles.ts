import { StyleSheet } from "react-native";

const colors = {
  primary: "#0D0D0D",
  secondary: "#1A1A1A",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.primary,

    width: "100%",
    height: 173,
  },
  appName: {},
  contentWrapper: {},
  input: {},
});
