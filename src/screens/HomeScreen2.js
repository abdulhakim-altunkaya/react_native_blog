

import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, ScrollView, FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";

function HomeScreen() {
  const {state2, addBlog} = useContext(Context);

  return (
    <View>
      <FlatList 
        data={state2}
        keyExtractor={(element) => element}
        renderItem={({item}) => {
          return(
            <Text>{item.title}</Text>
          )
        }}
        />
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

export default HomeScreen