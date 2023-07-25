import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, ScrollView } from "react-native";

function BlogDetails() {
  return (
    <View>
      <Text style={styles.details}>details sir</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    color: "red",
  },

})

export default BlogDetails