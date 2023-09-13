import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import { getMarkedLS } from '../../Utilities/Utilities';



const Blogs = ({ handleBookmark, handleReadingTime, totalTime, setBookmarks,marked }) => {
    const [blogs, setBlogs] = useState([])
    

    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])

    useEffect(() => {
        if (blogs.length) {
            const storedMarked = getMarkedLS()
            const savedMarked = [];
            for (const id of storedMarked) {
                const marked = blogs.find(blog => blog.id === id)
                savedMarked.push(marked)
            }
            setBookmarks(savedMarked)
        }

    }, [blogs])

    return (
        <div className=' md:flex w-2/3'>
            <div>
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        marked={marked}
                        
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