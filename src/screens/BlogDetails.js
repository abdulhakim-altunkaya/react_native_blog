import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

//this import is for second way
import BlogContext from "../context/BlogContext";



function BlogDetails(props) {
  //way-1: directly getting data from route params
  const blogId = props.navigation.getParam("id");
  const blogTitle2 = props.navigation.getParam("blogTitle");

  //way-2: getting data from blogcontext source
  const {blogs} = useContext(BlogContext);
  const blogPost = blogs.find(
    targetBlog => targetBlog.key === blogId
  )


  return (
    <View>
      <Text style={styles.details}>FIRST WAY TO DISPLAY BLOGS: getParam</Text>
      <Text style={styles.blogTitle}>{blogTitle2}</Text>
      <Text style={styles.blogId}>details of {blogId}</Text>
      <Text style={styles.details}>SECOND WAY TO DISPLAY BLOGS: useContext</Text>
      <Text style={styles.blogTitle}>{blogPost.title}</Text>
      <Text style={styles.blogId}>{blogPost.key}</Text>
      <Text style={styles.blogText}>{blogPost.text}</Text>
    </View>
  )
}

BlogDetails.navigationOptions = (props) => {
  const blogId = props.navigation.getParam("id");
  return{
    headerRight: () => (
      <TouchableOpacity onPress={() => props.navigation.navigate('edit', {id: blogId})}>
        <AntDesign name="edit" style={styles.iconStyle} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  details: {
    color: "red",
    fontWeight: "800",
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  blogId: {
    fontSize: 12,
    fontStyle: "italic",
  },
  blogText: {
    fontSize: 18,
  },
  iconStyle: {
    marginRight: 10,
    fontSize: 33,
    color: "#307d03",
  },

})

export default BlogDetails

