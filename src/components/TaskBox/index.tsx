import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { styles } from "./styles";
import theme from "../../globals/styles/theme";
import { useState } from "react";
import { TaskProps } from "../../screens/Home";

type TaskBoxProps = TouchableOpacityProps & {
  active: boolean;
  task: TaskProps;
  handleActiveTask: (id: number) => void;
  handleRemoveTask: (id: number) => void;
  handleTaskDone: (id: number) => void;
  // onLongPress: () => void;
};

export const TaskBox = ({
  active,
  task,
  handleActiveTask,
  handleRemoveTask,
  handleTaskDone,
  ...rest
}: TaskBoxProps) => {
  const { id, title, done } = task;
  return (
    <View
      style={[
        styles.container,
        done ? { borderColor: theme.colors.gray[400] } : { borderColor: theme.colors.gray[500] },
      ]}
      {...rest}
    >
      <TouchableWithoutFeedback onPress={() => handleTaskDone(id)}>
        {done ? (
          <Ionicons
            name="ios-checkmark-circle-sharp"
            size={24}
            color={active ? theme.colors.secondaryDark : theme.colors.secondary}
          />
        ) : (
          <FontAwesome5
            name="circle"
            size={24}
            color={active ? theme.colors.primaryDark : theme.colors.primary}
          />
        )}
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => handleActiveTask(id)} style={styles.titleWrapper}>
        <Text
          style={[
            styles.title,
            done
              ? { color: theme.colors.gray[300], textDecorationLine: "line-through" }
              : { color: theme.colors.gray[100] },
          ]}
        >
          {title}
        </Text>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={() => handleRemoveTask(id)}
        style={[styles.deleteBox, active && { backgroundColor: theme.colors.gray[400] }]}
      >
        <Feather
          name="trash-2"
          size={14}
          color={active ? theme.colors.danger : theme.colors.gray[300]}
        />
      </TouchableOpacity>
    </View>
  );
};
