import React, { createContext, useReducer } from "react";

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

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, initialState);

  const addBlogPost = () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };

  return (
    <BlogContext.Provider
      value={{ name: "hamido, sukriya, ayşo, cano, hazniyo", age: 36, blogs: blogPosts, addBlog: addBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;


