import React from 'react';
import { Text, View ,TouchableOpacity ,TextInput, Image,  StyleSheet, ToastAndroid } from 'react-native';

import db from "../config.js" ;

export default class TransactionScreen extends React.Component{
constructor(props){
    super(props);
    this.state={
        author: '',
        storyText: '',
        title: ''};
    }

    submitStory=()=>{
        db.collection('stories').add({
            author: this.state.author,
            storyText: this.state.storyText,
            title: this.state.title,
        });
        this.setState({
            author:'',
            storyText:'',
            title:'',
        });
        ToastAndroid.show('STORY SUBMITTED', TostAndroid.SHORT)
    };

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{textAlign:'center',fontSize: 30, backgroundColor:'#FFA5A5'}}>
                        StoryHub{' '}
                    </Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput style={styles.inputBox} placeholder="Title of Story"/>
                     </View>
                     <View style={styles.inputView}>
                        <TextInput style={styles.inputBox} placeholder="Author of Story"/>
                     </View>
                     <View style={styles.inputView}>
                        <TextInput style={styles.storyBox} placeholder="Write your story here"/>
                     </View>
                     <TouchableOpacity style={styles.submitButton}
                     onPress={this.submitStory}>
                         <Text style={styles.submitButtonText}>Submit</Text>
                     </TouchableOpacity>
              </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFA5A5",
    },
    displayText:{
        fontSize:15,
        textDecorationLine:"underline",
    },
    scanButton:{
        backgroundColor:"#2196F3",
        padding:10,
        margin:10
    },
    buttonText:{
        fontSize:15,
        textAlign:"center",
        marginTop:10,
    },
    inputView:{
        flexDirection:"row",
        margin:20,
    },
    inputBox:{
    width:200,
    height:40,
    borderWidth:1.5,
    borderRightWidth:1.5,
    fontSize:20,
    backgroundColor:"white",     
    },
    storyBox:{
        width:200,
        height:200,
        borderWidth:1.5,
        borderRightWidth:1.5,
        borderLeftWidth:0,
    },
    scanButton:{
        background:"#BA49FF",
        width:50,
        borderWidth:1.5,
        borderLeftWidth:0,
    },
    submitButton:{
        backgroundColor:"#BA49FF",
        width:200,
        height:50,
    },
    submitButtonText:{
        padding:10,
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",
        color:"white",
    },
});