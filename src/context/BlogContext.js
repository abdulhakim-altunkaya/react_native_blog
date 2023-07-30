import React, { createContext, useReducer } from "react";


const generateRandomId = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";
  for(let i=0; i<6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
}

const blogReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOG_POST":
      return [...state, { title: `blog post #${state.length + 1}`, key: generateRandomId() }];
    case "DELETE_BLOG":
      let blogs = [...state];
      let blogs2 = blogs.filter( (blog) => blog.key !== action.payload );
      return blogs2;
    default:
      return state;
  }
};



const initialState = [
  { title: "blog post #1", key: "1af" },
  { title: "blog post #2", key: "1a3" },
  { title: "blog post #3", key: "1ag" },
  { title: "blog post #4", key: "1ah" },
  { title: "blog post #5", key: "1aj" },
];

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, initialState);

  const addBlogPost = () => {
    dispatch({ type: "ADD_BLOG_POST" });
  };
  const deleteBlogPost = (blogId) => {
    dispatch({ type: "DELETE_BLOG", payload: blogId });
  };

  return (
    <BlogContext.Provider
      value={{ name: "hamido, sukriya, ayşo, cano, hazniyo", age: 36, blogs: blogPosts, addBlog: addBlogPost, deleteBlog: deleteBlogPost }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;


