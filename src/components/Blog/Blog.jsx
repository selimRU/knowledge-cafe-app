
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleBookmark, handleReadingTime }) => {
    const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-10'>
            <img className='w-full' src={cover} alt="" />
            <div className=" flex justify-between items-center py-3">
                <div className="flex gap-4">
                    <img className="w-[50px]" src={author_img} alt="" />
                    <div>
                        <p className=' text-2xl font-semibold'>{author}</p>
                        <span>{posted_date}</span>
                    </div>
                </div>
                <div className='flex items-center '>
                    <div>
                        <p>{reading_time} min read</p>
                    </div>
                    <div className='ml-2 text-red-500'>
                        <button onClick={() => handleBookmark(blog)}><FaBookmark /></button>
                    </div>
                </div>
            </div>
            <h3 className='text-4xl font-bold py-2'>{title}</h3>
            <div>
                {
                    hashtags.map((hashtag, idx) =>
                        <span className='pr-3 text-sm' key={idx}>#{hashtag}</span>
                    )
                }
            </div>

            {
                <button onClick={() => handleReadingTime(reading_time,id)} className=' text-blue-600 underline' >Mark as read: </button>
            }
        </div >
    );
};

export default Blog;