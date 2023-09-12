import { useEffect, useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Nav from "./components/Nav/Nav"
import { addLS, getMarkedLS } from "./Utilities/Utilities"


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [totalTime, setTotalTime] = useState([])

  // useEffect(() => {
  //   if (bookmarks.length) {
  //     const storedMarked = getMarkedLS()
  //     const savedMarked = [];
  //     for (const id of storedMarked) {
  //       const marked = bookmarks.find(bookmark => bookmark.id === id)
  //       savedMarked.push(marked)
  //     }
  //     setBookmarks(savedMarked)
  //   }

  // }, [bookmarks])

  const handleBookmark = (blog) => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
    addLS(blog.id)
    console.log(blog.id);
  }

  const handleReadingTime = (readingTime,id) => {
    const newTotalTime = [...totalTime, readingTime]
    setTotalTime(newTotalTime)
    const reamaining = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(reamaining)
  }

 
  return (
    <div className="max-w-5xl mx-auto my-5">
      <Nav></Nav>
      <div className=" md:flex gap-5">
        <Blogs
          handleReadingTime={handleReadingTime}
          handleBookmark={handleBookmark}></Blogs>
        <Bookmarks totalTime={totalTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
