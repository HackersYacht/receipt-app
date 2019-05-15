import React from 'react'
import {
  View, StyleSheet, Text
} from 'react-native'

import Header from './header'
import Receipt from './receipt'

const listOfReceipts = (props)=>(
  <View style={myStyles.main}>
    <Header title='Receipts'
      goBack = {props.moveToHome}
    />

    <View style={myStyles.content}>
      {props.list.map((rcpt, index)=>(
          <Receipt key={index}
              receiptNumber={index+1}
              receiptDate={rcpt.createdAt}
              receiptData={rcpt}
            />
        ))
      }
    </View>
  </View>
)

const myStyles = StyleSheet.create({
  main: {
    flex:1
  },
  content: {
    flex: 8
  }
})

export default listOfReceipts
