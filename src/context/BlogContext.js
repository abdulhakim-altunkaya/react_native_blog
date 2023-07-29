import React, {useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ( {children} ) => {

    const [blogPosts, setBlogPosts] = useState([
        {title: "blog post #1"},
        {title: "blog post #2"},
        {title: "blog post #3"},
        {title: "blog post #4"},
        {title: "blog post #5"},
    ]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, {title:`blog post #${blogPosts.length+1}`}] )
    }

    return (
        <BlogContext.Provider value={{name: "hamido, sukriya, ayşo, cano, hazniyo", age: 36, blogs: blogPosts, addBlog: addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )
}
export default BlogContext;