import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <LogoSvg width={RFValue(120)} height={RFValue(68)} />
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#A09CB1"
          />

          <TouchableOpacity style={styles.buttonAdd}>
            <Feather name="plus-circle" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
