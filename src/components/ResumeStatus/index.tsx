import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { styles } from "./styles";

type ResumeStatusProps = {
  title: string;
  quatity: number;
  color: string;
};

export const ResumeStatus = ({ title, quatity, color }: ResumeStatusProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color }]}>{title}</Text>
      <View style={styles.quantityTag}>
        <Text style={styles.quantityText}>{quatity}</Text>
      </View>
    </View>
  );
};
