import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Slider } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Course Goals"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button
                    title="Submit"
                    onPress={props.onAddGoal.bind(this, enteredGoal)}
                />
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
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