import React, {useState, useContext} from "react";
import {View, Text, StyleSheet, ScrollView } from "react-native";

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
      
      <Text style={styles.blogTitle}>{blogTitle2}</Text>
      <Text style={styles.details}>details of {blogId}</Text>

      <Text style={styles.blogTitle}>Second way to display blog: {blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    color: "red",
  },
  blogTitle: {
    fontSize: 24,
    fontWeight: "800",
  }

})

export default BlogDetails