import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.goal}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(200, 120, 47, 0.1)'
    },
})

export default GoalItem