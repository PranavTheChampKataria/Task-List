import { View, Modal, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'


const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalHandler = (enteredGoal) => {
        setEnteredGoal(enteredGoal);
    }
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
     <View style={styles.container}>
         <TextInput placeholder="Next task..." style={styles.inputContainer}
             onChangeText={goalHandler} value={enteredGoal}
         />
         <View style={styles.buttonContainer}>
        <View style={styles.button}>
         <Button title="Cancel" color='red' onPress={props.onCancel} />
         </View>
         <View style={styles.button}>
         <Button title="Add" onPress={addGoalHandler}/>
         </View>
         </View>
     </View>
     </Modal>
    )
}

export default GoalInput