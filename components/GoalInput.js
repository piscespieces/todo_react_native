import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Course Goals"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button
                title="Submit"
                onPress={addGoalHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textInput: {
        width: '80%',
        height: 40,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#c8782f',
    },
})