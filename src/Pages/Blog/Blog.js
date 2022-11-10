import React from 'react';



const Blog = ({ blog }) => {
    const { title, text } = blog
    return (


        <div className="max-w-lg p-4  bg-neutral rounded-xl text-white my-5">
            <h3 className="text-xl font-semibold dark:text-violet-400 mb-5">{title}</h3>

            <p className="leading-snug dark:text-gray-400">
                {text}</p>
        </div>

    );
};

export default Blog;