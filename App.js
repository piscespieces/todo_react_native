import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals((currentStateGoal => [...currentStateGoal, { id: Math.random().toString(), value: enteredGoal }]))
  }

  return (
    <View style={styles.container}>
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
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },

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

  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'rgba(200, 120, 47, 0.1)'
  },
});
