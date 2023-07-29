
import React, { createContext, useReducer } from "react";
import DataContext from "./DataContext";


const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

const initialState = [
  { title: "blog post #1" },
  { title: "blog post #23434343434" },
  { title: "blog post #3" },
  { title: "blog post #4" },
  { title: "blog post #5" },
];

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "ADD_BLOG_POST" });
  }
  
};

export const { Context, Provider } = DataContext(blogReducer, {addBlogPost}, initialState);