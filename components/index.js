import React, { useState } from "react";
import { View, Modal, FlatList, Button } from "react-native";
import styles from './styles'
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

const Tasklist = (props) => {

    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [...currentGoals,
        { id: Math.random().toString(), value: goalTitle }])
        setIsAddMode(false)
    }

    const removeHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }

    const onCancelGoalAdditionHandler = () =>{
        setIsAddMode(false)
    }

    return (
       
            <View style={{ padding: 40 }}>
                <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
                <GoalInput onAddGoal={addGoalHandler} 
                visible={isAddMode} onCancel={onCancelGoalAdditionHandler}/>
                <View>
                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={courseGoals}
                        renderItem={itemData => (
                            <GoalItem id={itemData.item.id} onDelete={removeHandler} title={itemData.item.value} />)} />
                </View>
            </View>
    )
}

export default Tasklist;