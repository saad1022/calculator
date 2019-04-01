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
        this.state = {}
    }

    render() {
        let elems = [[1,2,3] , [4,5,6] , [7,8,9] ,[0,0,'=']] , rows = [] 
        
        //Number Buttons
        for (let i=0; i < 4; i++){
            let row = []
            for(let j=0; j < 3; j++){
                row.push(<TouchableOpacity style = {styles.btn}>
                <Text style ={styles.btnText}>{elems[i][j]}</Text>
                </TouchableOpacity>)
            }
            rows.push(<View style = {styles.row}>{row}</View>)
        }

        //Operation Buttons
        let operations = ['+' , '-' , '*' , '/'] , ops = []
        for(let i=0; i<4; i++){
            ops.push(<TouchableOpacity style = {styles.btn}>
                <Text style ={[styles.btnText, styles.white]}>{operations[i]}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style = {styles.container}>

                <View style = {styles.input}>
                    <Text style={styles.inputText}>11 X 11</Text>
                </View>
                <View style = {styles.calculation}>
                    <Text style = {styles.calculationText}>121</Text>
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
            color: 'white'
        },
        btnText: {
            fontSize: 30
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
            fontSize: 24,
            color: 'white'
        },
        row: {
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        input: {
            flex: 2,
            backgroundColor : 'red',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        calculation:{
            flex: 1,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'flex-end'
        },
        buttons: {
            flex: 7,
            flexDirection: 'row'
        },
        numbers: {
            flex: 3,
            backgroundColor: 'yellow'
        },
        operations: {
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'space-around',
            alignItems: 'stretch'
        }


})

export default Layout;