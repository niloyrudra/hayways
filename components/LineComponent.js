import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LineComponent = () => {
  return (
  <View style={styles.bottomLineContainer}>
    <View style={styles.bottomLine} />
  </View>
  )
}

export default LineComponent

const styles = StyleSheet.create({
    bottomLineContainer: {
        flex:1,
        position:"absolute",
        // borderBottomWidth: 5,
        // borderBottomColor: "#00B906",
        left: "27.69%",
        right: "27.45%",
        top: "94.98%",
        bottom: "5.02%",
        width:"100%",
        height:5,
        // flexGrow:1
        // bottom: "5.02%"
    },
    bottomLine: {
        // position:"fixed",
        // borderBottomWidth: 5,
        // borderBottomColor: "#00B906",
        // left: "27.69%",
        // right: "27.45%",
        // top: "94.98%",
        // bottom: "5.02%",
        width:192,
        height:5,
        backgroundColor:"#00B906",
        // flexGrow:1
        // bottom: "5.02%"
    }
})