import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, ScrollView, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

function HomeScreen() {
  const {name, age, blogs, addBlog} = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.mainContainer}>{name}</Text>
      <Text>{age}</Text>
      <FlatList 
        data={blogs}
        keyExtractor={(element) => element.key}
        renderItem={({item}) => {
          return(
            <>
              <Text>{item.title}</Text>
              <Text>{item.key}</Text>
            </>
          )
        }}
        />
      <Text>{blogs[1].title}</Text>
      <Button
            title='Add a new blog'
            onPress={addBlog} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    fontWeight: "bold",
  },

})

export default HomeScreen;