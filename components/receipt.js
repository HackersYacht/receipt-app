import React from 'react'
import {
  TouchableOpacity, Text, StyleSheet
} from 'react-native'

export default (props)=>(
  <TouchableOpacity style={receiptStyles.main}>
    <Text style={receiptStyles.receiptNo}>
      Cash sale {props.receiptNumber}
    </Text>
    <Text style={receiptStyles.date}>
      Created on {props.receiptDate.toDateString()}
    </Text>
  </TouchableOpacity>
)

const receiptStyles = StyleSheet.create({
  main: {
    padding:10,
    paddingHorizontal: 20,
    margin: 5,
    elevation: 1,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 2
  },
  receiptNo: {
    color: '#1d1d1d',
    fontSize: 20
  },
  date: {
    fontSize: 15
  }
})
