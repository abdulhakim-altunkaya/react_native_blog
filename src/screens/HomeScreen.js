import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";
import { FontAwesome5 } from '@expo/vector-icons';


function HomeScreen(props) {
  const {name, age, blogs, addBlog, deleteBlog} = useContext(BlogContext);

  return (
    <View>
      <Text style={styles.mainContainer}>{name}</Text>
      <Text>{age}</Text>
      {blogs.length === 0 ? 
        <Text style={styles.notificationStyle}>No Blogs yet</Text>
      :
        <FlatList 
          data={blogs}
          keyExtractor={(element) => element.key}
          renderItem={({item}) => {
            return(
              <>
                <View style={styles.listStyle}>
                  <TouchableOpacity onPress={() => props.navigation.navigate("details", {id: item.key, blogTitle: item.title})}>
                    <Text style={styles.titleStyle} >{item.title}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteBlog(item.key) }>
                    <FontAwesome5 name="trash-alt" size={20} color="#c44312" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.keyStyle}>id: {item.key}</Text>
              </>
            )
          }}
        />
      }

      
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
  listStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 9,
    marginRight: 9,
    marginTop: 7,
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 18,
  },
  keyStyle:{
    marginLeft: 9,
    fontSize: 11,
    fontStyle: "italic",
  },
  notificationStyle: {
    fontFamily: 'sans-serif',
  },

})

export default HomeScreen;