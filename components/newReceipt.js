import React, { Component } from 'react'
import {
  View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView
} from 'react-native'

import Header from './header'

class NewReceipt extends Component {
    state = {
      companyName: '',
      amount: '',
      paidFor: '',
      balance: ''
    }


    render(){
      let {companyName, amount, paidFor, balance} = this.state

      return (
        <View style={myStyles.main}>
          <Header title='New Receipt'
              goBack = {this.props.moveToHome}
           />

          <View style={myStyles.content}>
            {/* the inputs
            company name, amount, paid for , balance, save button*/}
            <View style={myStyles.row}>
              <Text style={myStyles.txt}>
                Company Name
              </Text>
              <TextInput style={myStyles.input}
                placeholder=''
                autoFocus
                onChangeText = {
                  (companyName)=>this.setState({companyName:companyName})
                }
              />
            </View>

            <View style={myStyles.row}>
              <Text style={myStyles.txt}>
                Amount
              </Text>
              <TextInput style={myStyles.input}
                placeholder=''
                onChangeText = {
                  (amount)=>this.setState({amount})
                }
              />
            </View>

            <View style={myStyles.row}>
              <Text style={myStyles.txt}>
                Paid for
              </Text>
              <TextInput style={myStyles.input}
                placeholder=''
                onChangeText = {
                  (paidFor)=>this.setState({paidFor})
                }
              />
            </View>

            <View style={myStyles.row}>
              <Text style={myStyles.txt}>
                Balance
              </Text>
              <TextInput style={myStyles.input}
                placeholder=''
                onChangeText = {
                  (balance)=>this.setState({balance})
                }
              />
            </View>

            <TouchableOpacity style={myStyles.btn}
              onPress={()=>this.props.save(companyName, amount, paidFor, balance)}
            >
              <Text style={myStyles.btnTxt}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
}

const myStyles = StyleSheet.create({
  main: {
    flex:1
  },
  content: {
    flex: 8
  },
  row:{
    padding: 20
  },
  input:{
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0, 0.3)',
  },
  txt:{
    //color: '#1d1d1d',
    fontSize: 18
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#1d1d1d',
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 5
  },
  btnTxt:{
    color: '#FFF'
  }
})

export default NewReceipt
