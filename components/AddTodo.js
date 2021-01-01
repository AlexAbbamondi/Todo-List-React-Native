import React, {useState} from "react";
import {StyleSheet, Text, TextInput, Button, View} from "react-native";

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState("");

    //handles text changes
    const changeHandler = (val) => {
        setText(val);
    }

    //text input and button for adding todo items
    return(
        <View>
            <TextInput placeholder="New Todo..." onChangeText={changeHandler} style={styles.input}/>
            <View style={styles.button}>
                <Button onPress={() => submitHandler(text)} title="Add Todo" color="coral"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        marginTop: 25,
        marginHorizontal: 25,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        textAlign: "center"
    },
    button: {
        marginHorizontal: 75,
        marginTop: 10
    }
})