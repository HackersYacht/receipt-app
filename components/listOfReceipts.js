import React from 'react'
import {
  View, StyleSheet, Text
} from 'react-native'

import Header from './header'
import Receipt from './receipt'
import ReceiptDetail from './receiptDetail'

class ListOfReceipts extends React.Component{
  state = {
    currentScreen: 'LIST_RECEIPTS',
    selectedReceipt: {},
    selectedReceiptNumber: -1
  }

  viewDetails(selectedReceipt, selectedReceiptNumber){
    this.setState({
      currentScreen: 'RECEIPT_DETAIL',
      selectedReceipt,
      selectedReceiptNumber
    })
  }

  render(){
    let { currentScreen,
          selectedReceipt:{paidFor, companyName, balance, createdAt, amount},
          selectedReceiptNumber
        } = this.state

     if (currentScreen === 'RECEIPT_DETAIL'){
       return (<ReceiptDetail
                paidFor= {paidFor}
                balance={balance}
                createdAt={createdAt}
                companyName={companyName}
                amount={amount}
                receiptNumber={selectedReceiptNumber}
            />)
     }

      return (
        <View style={myStyles.main}>
          <Header title='Receipts'
            goBack = {this.props.moveToHome}
          />

          <View style={myStyles.content}>
            {this.props.list.map((rcpt, index)=>(
                <Receipt key={index}
                    receiptNumber={index+1}
                    receiptDate={rcpt.createdAt}
                    receiptData={rcpt}
                    viewDetails = {()=>this.viewDetails(rcpt, index+1)}
                  />
              ))
            }
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
  }
})

export default ListOfReceipts
