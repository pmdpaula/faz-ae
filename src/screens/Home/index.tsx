import { StatusBar } from "expo-status-bar";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import LogoSvg from "../../assets/logo.svg";
import { SvgProps } from "react-native-svg";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <LogoSvg width={110} height={32} />
      </View>

      <View style={styles.contentWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#A09CB1"
        />

        <TouchableOpacity>
          <Feather name="plus-circle" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
