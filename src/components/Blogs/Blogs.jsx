import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';



const Blogs = ({ handleBookmark, handleReadingTime, totalTime }) => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBlogs(data)
            })
    }, [])
    

    return (
        <div className=' md:flex w-2/3'>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        totalTime={totalTime}
                        handleReadingTime={handleReadingTime}
                        handleBookmark={handleBookmark}
                        blog={blog}></Blog>)
                }
            </div>

        </div>
    );
};

export default Blogs;