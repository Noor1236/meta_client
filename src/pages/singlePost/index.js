import React, { useState, useEffect } from 'react'
import Post from '../features/post'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SinglePost() {
  const param = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    axios.get(`https://server-theta-taupe.vercel.app/get_blog/${param.id}`)
      .then(function (response) {
        console.log("All data", response)
        setBlog(response?.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  console.log("Single Post date", blog)
  return (
    <div>

      <Post blog={blog && blog} />

    </div>
  )
}

export default SinglePost
