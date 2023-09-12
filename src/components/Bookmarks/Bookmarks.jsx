import Bookmark from "../Bookmark/Bookmark";
import ReadingTime from '../ReadingTime/ReadingTime';


const Bookmarks = ({ bookmarks, totalTime }) => {
    return (
        <div className=" w-1/3">
            <div className=" mb-3 bg-slate-400 p-2 rounded-md">
                <ReadingTime totalTime={totalTime}></ReadingTime>
            </div>
            <div className=' bg-slate-400 rounded-md p-3'>
                <h1 className="text-lg font-semibold">Bookmarks Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark,id) => <Bookmark
                        key={id}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;