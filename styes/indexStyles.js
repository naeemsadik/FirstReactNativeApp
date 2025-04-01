import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
      padding: 20,
      margin: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#000",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      margin: 10,
      color: "#ffaa00",
    },
    button: {
      backgroundColor: "#007AFF",
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      textAlign: "center",
    },
  })