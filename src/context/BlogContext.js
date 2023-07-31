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
      return [...state, { title: `blog post #${state.length + 1}`, text:"default text", key: generateRandomId() }];
    case "DELETE_BLOG":
      let blogs = [...state];
      let blogs2 = blogs.filter( (blog) => blog.key !== action.payload );
      return blogs2;
    case "SAVE_BLOG":
      return [...state, { title: action.payload.blogTitle, text:action.payload.blogText, key: generateRandomId() }];
    case "UPDATE_BLOG":
      const updatedBlogs = state.map((blog) => {
        if(blog.key === action.payload.blogId) {
          return {...blog, title: action.payload.blogTitle, text: action.payload.blogText}
        } else {
          return blog;
        }
      })
      return updatedBlogs;
    default:
      return state;
  }
};



const initialState = [
  { title: "blog post #1", text: "Hello ssome text ffrom blog 1", key: "1af" },
  { title: "blog post #2", text: "Hello ssome text ffrom blog 2", key: "1a3" },
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
  const saveBlogPost = (blogTitle, blogText) => {
    dispatch({ type: "SAVE_BLOG", payload: {blogText, blogTitle}})
  }
  const updateBlogPost = (blogTitle, blogText, blogId) => {
    dispatch({ type: "UPDATE_BLOG", payload: {blogTitle, blogText, blogId}})
  }

  return (
    <BlogContext.Provider
      value={{ name: "hamido, sukriya, ayşo, cano, hazniyo", age: 36, blogs: blogPosts, addBlog: addBlogPost, 
      deleteBlog: deleteBlogPost, saveBlog: saveBlogPost, updateBlog: updateBlogPost  }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;


