import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const theme = {
  colors: {
    primary: "#1E6F9F",
    secondary: "#0D0D0D",
    background: "#1A1A1A",
  },
  border: {
    radius: 8,
    width: 1,
  },
};

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

    backgroundColor: theme.colors.secondary,

    width: "100%",
    height: 173,
    marginTop: 40,
  },
  contentWrapper: {
    width: "100%",

    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",

    backgroundColor: theme.colors.background,
  },
  formWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingHorizontal: 24,
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

    fontFamily: "Inter_400Regular",
    fontSize: 16,
  },
  buttonAdd: {
    width: 54,
    height: 54,

    backgroundColor: theme.colors.primary,
    borderRadius: theme.border.radius,

    alignItems: "center",
    justifyContent: "center",
  },
});
