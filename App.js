import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    {text: "buy coffee", key: "1"},
    {text: "create an app", key: "2"},
    {text: "play on the switch", key: "3"}
  ]);

  //Delete a todo item
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  }

  //submit a todo item
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [ {text: text, key: Math.random().toString()}, ...prevTodos ]
    })
  }
  //Main layout
    return(
      <View style={styles.container}>
        <Header />
        <View syle={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList data={todos} renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}/>
          </View>
        </View>
      </View>
    ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20
  }
})
