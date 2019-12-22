import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.goal}</Text>
        </View>
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