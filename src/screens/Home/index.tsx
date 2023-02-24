import { useState, useEffect } from "react";

import { Button, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg";
import ClipboardSvg from "../../assets/clipboard.svg";

import { ResumeStatus } from "../../components/ResumeStatus";
import { TaskBox } from "../../components/TaskBox";

import { styles } from "./styles";
import theme from "../../globals/styles/theme";

export type TaskProps = {
  id: number;
  title: string;
  done: boolean;
};

export function Home() {
  const [inputTask, setInputTask] = useState("");
  const [activeTask, setActiveTask] = useState(1);
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksDone, setTotalTasksDone] = useState(0);

  const countTasks = taskList.length;
  const countTasksDone = taskList.filter((task) => task.done).length;

  const handleAddTask = () => {
    const newTask = {
      id: new Date().getTime(),
      title: inputTask,
      done: false,
    };

    setTaskList((oldState) => [...oldState, newTask]);
    setInputTask("");
  };

  const handleActiveTask = (id: number) => {
    setActiveTask(id);
  };

  const handleTaskDone = (id: number) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }

      return task;
    });

    setTaskList(newTaskList);
  };

  const handleRemoveTask = (id: number) => {
    const newTaskList = taskList.filter((task) => task.id !== id);

    setTaskList(newTaskList);
  };

  useEffect(() => {
    setTotalTasks(countTasks);
    setTotalTasksDone(countTasksDone);
  }, [taskList]);

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
            placeholderTextColor={theme.colors.gray[300]}
            value={inputTask}
            onChangeText={(text) => setInputTask(text)}
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
            <Feather name="plus-circle" size={24} color="#F2F2F2" />
          </TouchableOpacity>
        </View>

        <View style={styles.todoListHeader}>
          <ResumeStatus title="Criadas" quatity={totalTasks} color={theme.colors.primary} />
          <ResumeStatus
            title="Concluídas"
            quatity={totalTasksDone}
            color={theme.colors.secondary}
          />
        </View>

        <View style={styles.todoListContent}>
          {taskList.length === 0 ? (
            <View style={styles.todoListEmptyWrapper}>
              <View style={styles.contentSeparator}></View>
              <ClipboardSvg width={RFValue(56)} height={RFValue(56)} />
              <Text style={styles.todoListEmpty1}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.todoListEmpty2}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          ) : (
            <FlatList
              data={taskList}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <TaskBox
                  key={item.id}
                  task={item}
                  active={item.id === activeTask}
                  handleActiveTask={() => handleActiveTask(item.id)}
                  handleTaskDone={() => handleTaskDone(item.id)}
                  handleRemoveTask={() => handleRemoveTask(item.id)}
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 128 }}
            />
          )}
        </View>
      </View>
    </View>
  );
}
