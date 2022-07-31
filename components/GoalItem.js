import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={()=>props.onDelete(props.id)}>
    <View style={styles.listItem}>
        <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>        
  )
}

export default GoalItem