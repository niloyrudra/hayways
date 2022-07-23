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

const SignInScreen = ( {navigation} ) => {
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
        </View>
 
        <View style={styles.infoViewContainer}>

            <TouchableOpacity style={{flexDirection:"row",justifyContent:"center"}}>
                <Image style={styles.circleCheck} source={require("../../assets/check2-circle.png")} />
                <Text style={styles.infoText}>Keep Me logged in</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={ () => navigation.navigate( "ForgotPassword" ) }
            >
                <Text style={styles.infoText}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.bottomLink}
            onPress={ () => navigation.navigate( "SignUp" ) }
        >
            <Text>Need To Create An Account?</Text>
        </TouchableOpacity>

        {/* <LineComponent /> */}
        <View style={{flex:1,backgroundColor:"#00B906",width:192,height:5,bottom:30,position:"absolute"}} />

    </View>
  )
}

export default SignInScreen

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
        marginTop:-8
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
    loginBtn:
    {
        // width: "70%",
        width: 297,
        borderRadius:30,
        height:45,
        alignItems:"center",
        justifyContent:"center",
        marginTop:25,
        backgroundColor: "#00B906"
    },
    loginText: {
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