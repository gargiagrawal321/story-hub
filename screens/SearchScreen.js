import * as React from 'react';
import{ Text, View,  TextInput,  StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class TransactionScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            title:"",
            author:"",
            storyText:""
        }
     };

   
     render(){
             return(
                 <View style={styles.container}>
                     <Header backgroundColor="yellow" centerComponent={{
                         'text':"Story Hub",
                         'style':{color: "black"}
                     }}/>
                     <View>
                         <Text style={{textAlign : "center", fontSize:30,backgroundColor : "yellow"}}> StoryHub </Text>
                      </View>
                      <View style={styles.inputView}>
                          <TextInput
                          style={styles.inputBox}
                          placeholder="Title of Story"/>
                      </View>
                      <View style={styles.inputView}>
                          <TextInput 
                          style={styles.inputBox}
                          placeholder="Author of Story"/>
                      </View>
                      <View>
                         <TextInput 
                          style={styles.storyBox}
                          placeholder="Write your Story Here"/>
                      </View>
                 </View>
             );
       }
    }

     const styles = StyleSheet.create({
         container:{
             flex: 1,
             justifyContent:"center",
             alignItems:"center",
             backgroundColor: "lightgreen"
         },
         displayText:{
             fontSize: 15,
             textDecorationLine: "underline"
         },
         scanButton:{
             backgroundColor:"pink",
             padding: 10,
             margin:10
         },
         buttonText:{
            fontSize: 15,
            textAlign: "center",
            marginTop: 10
         },
         inputView:{
             flexDirection: "row",
             margin: 20
         },
         inputBox:{
             width: 200,
             height:40,
             borderWidth:1.5,
             borderRightWidth:1.5,
             fontSize: 20,
             backgroundColor:"white"
         },
         storyBox:{
            width: 200,
            height:200,
            borderWidth:1.5,
            borderRightWidth:1.5,
            fontSize: 20,
            backgroundColor:"white"
         },
         scanButton:{
            backgroundColor:"yellow",
            width: 50,
            borderWidth:1.5,
            borderLeftWidth:0,
         }
     })
