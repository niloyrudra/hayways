import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

// import LineComponent from "../../components/lineComponent";


const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

        <View style={{ marginTop: 40, marginBottom:30 }}>
            <Image style={styles.image} source={require("../../assets/logo/logo.png")} />
        </View>
 
        <StatusBar style="auto" />

        <View style={styles.inputViewContainer}>
            <View>
                <Text style={styles.inputViewLabel}>Email</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View>
                <Text style={styles.inputViewLabel}>Password</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <View>
                <Text style={styles.inputViewLabel}>Confirm Password</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
        </View>
 
        <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpText}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.bottomLink}
            onPress={() => navigation.navigate( "SignIn" ) }
        >
            <Text>Already Have An Account?</Text>
        </TouchableOpacity>


        <View style={{marginVertical:20,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <View style={{backgroundColor:"#00B906",width:123,height:1}} />
            <View style={{marginHorizontal:10}}>
                <Text>OR</Text>
            </View>
            <View style={{backgroundColor:"#00B906",width:123,height:1}} />
        </View>

        <View style={{marginBottom:20,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <TouchableOpacity
                style={{marginHorizontal:10}}
                onPress={() => console.log("GOOGLE Screen")}
            >
                <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/google.png" )} />
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginHorizontal:10}}
                onPress={() => console.log("INSTAGRAM Screen")}
            >
                <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/instagram.png" )} />
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginHorizontal:10}}
                onPress={() => console.log("FACEBOOK SignUp")}
            >
                <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/facebook.png" )} />
            </TouchableOpacity>

            <TouchableOpacity
                style={{marginHorizontal:10}}
                onPress={() => console.log("BOXUSERVOICE SignUp")}
            >
                <Image  style={{width: 34, height:34}} source={require( "../../assets/social-icons/bxs-user-voice.png" )} />
            </TouchableOpacity>
        </View>


        {/* <LineComponent /> */}
        <View style={{flex:1,backgroundColor:"#00B906",width:192,height:5,bottom:30,position:"absolute"}} />

    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      position:"relative"
    },
    inputViewContainer: {
        alignItems: "flex-start"
    },
    inputView: {
        // backgroundColor: "#FFC0CB",
        backgroundColor: "transparent",
        borderRadius: 30,
        // width: "70%",
        width: 297,
        height: 45,
        marginBottom: 20,
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "#C4C7C4"
    },
    inputViewLabel: {
        fontWeight: "900",
        fontSize: 17,
        marginLeft:20,
        marginBottom:5
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    infoViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 280,
    },
    circleCheck:{
        height: 12,
        width:12,
        marginRight:10,
        marginTop:2
    },
    infoText: {
        height: 30,
        // marginBottom: 30,
    },
    signUpBtn:
    {
        // width: "70%",
        width: 297,
        borderRadius:30,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        backgroundColor: "#00B906"
    },
    signUpText: {
        color:"#ffffff",
        fontWeight: "900",
        fontSize: 17,
        // marginBottom: 10,
        // marginLeft:20
    },
    bottomLink: {
        marginTop:25,
    }
});