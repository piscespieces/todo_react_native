import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goal => {
    setCourseGoals((currentStateGoal => [...currentStateGoal, { id: Math.random().toString(), value: goal }]))
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentStateGoals => {
      return currentStateGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            goal={itemData.item.value}
            onDelete={removeGoalHandler.bind(this, itemData.item.id)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
