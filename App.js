import React, {Component} from 'react'
import {
  View, TouchableOpacity, StyleSheet, Text
} from 'react-native'

import NewReceipt from './components/newReceipt'
import ListOfReceipts from './components/listOfReceipts'

export default class App extends Component{
  state = {
    currentScreen: 'HOME',
    receiptsList : [
      {
        companyName: 'Cookie Maker',
        amount: '20000',
        paidFor: 'French Cookies',
        balance: '200',
        createdAt: new Date()
      },
      {
        companyName: 'Hello',
        amount: '300000',
        paidFor: 'Fresh Potato',
        balance: '30000',
        createdAt: new Date()
      }
    ]
  }

  saveReceipt(companyName, amount, paidFor, balance){
    //get the current list of receipts from the state
    let { receiptsList } = this.state

    //check if the inputs are not empty
    if (companyName !=='' && amount !==''
        && paidFor !=='' && balance !==''){
        //save the Receipt
        receiptsList.push({
          companyName,
          amount,
          paidFor,
          balance,
          createdAt: new Date()
        })

        this.setState({receiptsList, currentScreen: 'HOME'})
      }
  }

  render(){
    // if the currentScreen is NEW_RECEIPT then show the NewReceipt Component
    if (this.state.currentScreen === 'NEW_RECEIPT'){
      return (<NewReceipt
                moveToHome = {()=>this.setState({currentScreen: 'HOME'})}
                save = {(companyName, amount, paidFor, balance)=>{
                  this.saveReceipt(companyName, amount, paidFor, balance)
                }}
         />)
    }

    if (this.state.currentScreen === 'LIST_RECEIPTS'){
      return (<ListOfReceipts
                moveToHome = {()=>this.setState({currentScreen: 'HOME'})}
                list={this.state.receiptsList}
        />)
    }

    //By default show the home Component with the 2 buttons
    return (
        <View style={styles.main}>
          <TouchableOpacity style={styles.btn}
            // change currentScreen to NEW_RECEIPT
            //using setState to change the state of currentScreen
            onPress={()=>this.setState({currentScreen: 'NEW_RECEIPT'})}
          >
            <Text style={styles.txt}>  New Receipt  </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}
            onPress={()=>this.setState({currentScreen: 'LIST_RECEIPTS'})}
          >
            <Text style={styles.txt}>List of receipts</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    main: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    btn: {
      backgroundColor: '#1d1d1d',
      padding: 10,
      marginVertical: 15,
      borderRadius: 3,
      paddingHorizontal: 20
    },
    txt: {
      color: '#FFF',
      fontSize: 18
    }
})
