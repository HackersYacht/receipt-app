import React from 'react'
import {
  View, StyleSheet, Text
} from 'react-native'

import Header from './header'

export default (props)=>(
  <View style={styles.main}>

    <Header title={props.paidFor } />

    <View style={styles.content}>
      <View style={styles.row}>
          <Text style={styles.companyName}>
            {props.companyName}
          </Text>
      </View>

      <View style={styles.row}>
        {/*for receipt number*/}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Receipt #</Text>
          <Text style={styles.value}>{props.receiptNumber}</Text>
        </View>
        {/*for receipt date*/}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>Receipt Date</Text>
          <Text style={styles.value}>{props.createdAt.toDateString()}</Text>
        </View>

      </View>

      <View style={styles.row}>

        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.title, {flex: 4}]}>
            Paid for
          </Text>
          <Text style={[styles.title, {flex: 2}]}>
            Amount
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.value, {flex: 4}]}>
            {props.paidFor}
          </Text>
          <Text style={[styles.value, {flex: 2}]}>
            {props.amount}
          </Text>
        </View>

      </View>

      <View style={styles.row}>

        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.value, {flex: 4}]}>
          </Text>
          <Text style={[styles.title, {flex: 2}]}>
            Balance
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.value, {flex: 4}]}>
          </Text>
          <Text style={[styles.value, {flex: 2}]}>
            {props.balance}
          </Text>
        </View>
      </View>

    </View>

  </View>
)

const styles = StyleSheet.create({
  main: {
    flex:1
  },
  content: {
    flex: 8
  },
  row: {
    margin: 10,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1d1d1d'
  },
  title: {
    flex: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d1d1d'
  },
  value: {
    flex: 2,
    fontSize: 18,
    color: '#1d1d1d'
  }
})
