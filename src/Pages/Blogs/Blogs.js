import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    // useEffect(() => 

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='text-center mx-auto'>
            <div className='grid grid-cols-2 my-5 '>
                {
                    blogs.map(blog => <Blog key={blog._id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>

    );
};

export default Blogs;