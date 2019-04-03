import React , { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
}  from 'react-native' ;

class Layout extends Component {
    
    constructor() {
        super()
        this.state = {
            inputText: "",
            calculationText: ""
        }
        this.operations = ['C' ,'/' , 'X' , '-' , '+'] 
    }

    calculateResult(){
        const text = this.state.inputText

        //parse Text
        this.setState({
            calculationText: eval(text)
        })

    }

    validate(){
        const text = this.state.inputText
        switch(text.slice(-1)){
            case '+':
            case '-':
            case '*':
            case '/':
                return false
        }
        return true
    }

    buttonPressed(text) {
        
        if(text == '='){
            return  this.validate() && this.calculateResult()
          }
        
        this.setState({
            inputText: this.state.inputText+text
        })
    }

    operate (operations) {
        switch(operations){
            case 'C':
                const text = this.state.inputText.split('')
                text.pop()
                
                this.setState({
                    inputText: text.join('')
                })
                break

             case '+':
             case '-':
             case '*':
             case '/':

                    const lastChar = this.state.inputText.split('').pop()

                    if(this.operations.indexOf(lastChar) > 0) return

                    if(this.state.text == "")  {
                        return
                    } 

                    this.setState({
                        inputText: this.state.inputText + operations
                    })
        }
    }
    render() {
        let elems = [[7,8,9] , [4,5,6] , [1,2,3] ,['.',0,'=']] , rows = [] 
        
        //Number Buttons
        for (let i=0; i < 4; i++){
            let row = []
            for(let j=0; j < 3; j++){
                row.push(<TouchableOpacity key={elems[i][j]} onPress={() => this.buttonPressed(elems[i][j])} style = {styles.btn}>
                <Text style ={styles.btnText}>{elems[i][j]}</Text>
                </TouchableOpacity>)
            }
            rows.push(<View key={i} style = {styles.row}>{row}</View>)
        }

        //Operation Buttons
        let ops = []
        for(let i=0; i<5; i++){
            ops.push(<TouchableOpacity key={this.operations[i]} onPress={() => this.operate(this.operations[i])} style = {styles.btn}>
                <Text style ={[styles.btnText, styles.white]}>{this.operations[i]}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style = {styles.container}>

                <View style = {styles.input}>
                    <Text style={styles.inputText}>{this.state.inputText}</Text>
                </View>
                <View style = {styles.calculation}>
                    <Text style = {styles.calculationText}>{this.state.calculationText}</Text>
                </View>
                
                <View style = {styles.buttons}>
                    <View style = {styles.numbers}>{rows}</View>
                    <View style = {styles.operations}>{ops}</View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
        container: {
            flex:1
        },
        inputText:{
            fontSize: 30,
            color: 'black'
        },
        btnText: {
            fontSize: 34,
            color: 'white'
        },
        white: {
            color: 'white'
        },
        btn:{
            flex: 1,
            alignItems: 'center',
            alignSelf: 'stretch',
            justifyContent: 'center'
        },
        calculationText:{
            fontSize: 38,
            color: 'black'
        },
        row: {
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        input: {
            flex: 2,
            backgroundColor : 'white',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        calculation:{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        buttons: {
            flex: 7,
            flexDirection: 'row'
        },
        numbers: {
            flex: 3,
            backgroundColor: '#434343'

        },
        operations: {
            flex: 1,
            backgroundColor: '#636363',
            justifyContent: 'space-around',
            alignItems: 'stretch'
        }


})

export default Layout;