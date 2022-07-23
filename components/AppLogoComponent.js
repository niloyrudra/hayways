import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const appLogoComponent = () => {
  return (
    <View style={styles.container}>
        <Image source = {require("../assets/logo/logo.svg")} style={styles.image} />
    </View>
  )
}

export default appLogoComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    image :{
    marginBottom: 40
    
    }
})