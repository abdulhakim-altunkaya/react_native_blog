import React, {useState, useContext} from "react";
import {View, Text, TextInput, StyleSheet, Button } from "react-native";
import BlogContext from "../context/BlogContext";


function CreateScreen(props) {

  const {saveBlog} = useContext(BlogContext);
  const save = async (titleText, blogText) => {
    await saveBlog(titleText, blogText);
    props.navigation.navigate("Home");
  }

  let[titleText, setTitleText] = useState("");
  let[blogText, setBlogText] = useState("");

  return (
    <View>
      <Text style={styles.headersStyle}>Blog Title: </Text>
      <View style={styles.container2}>
        <TextInput 
          value={titleText}
          onChangeText={(text) => setTitleText(text)}
          style={styles.input2} 
        />
      </View>
      <Text style={styles.headersStyle}>Blog: </Text>
      <View style={styles.container1}>
        <TextInput
          value={blogText}
          onChangeText={(text) => setBlogText(text)}
          style={styles.input1}
          placeholder="write your blog here"
          placeholderTextColor="#999"
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <Button title="Save Blog" onPress={() => save(titleText, blogText)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    color: "red",
  },
  headersStyle:{
    paddingLeft: 10,
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: "800",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 5,
  },
  input1: {
    width: "100%",
    height: 100, // Adjust the height as needed
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    backgroundColor: "#fff",
    textAlignVertical: "top", // This ensures the text starts from the top
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 5,
  },
  input2: {
    width: "100%",
    height: 35,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    backgroundColor: "#fff",
  },

})

export default CreateScreen