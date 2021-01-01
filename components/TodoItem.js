import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

//props passed in to delete an item
export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    item: {
        padding: 25,
        marginTop: 16,
        marginHorizontal: 25,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10
    }
})