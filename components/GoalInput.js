import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Slider } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
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
                <View style={styles.buttonWrapper}>
                    <Button
                        color="red"
                        title="Cancel"
                        onPress={props.onCancel}
                    />
                    <Button
                        title="Submit"
                        onPress={addGoalHandler}
                    />
                </View>
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
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#c8782f',
    },

    buttonWrapper: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: "center",
    }
})