import React, { useEffect, useState } from 'react'
import PostCard from '../../global/components/postCard'
import { postData } from '../../global/utils/data'
import axios from 'axios'



function Blogs() {

    const [blogs , setBlogs] = useState(null);

    useEffect(() => {
        axios.get('https://server-theta-taupe.vercel.app/get_blogs')
        .then(function (response) {
            console.log("All data", response)
            setBlogs(response?.data)
        })
        .catch(function (error) {
            console.log(error)
        });

    } , [])


    return (
        <div>
            <section className='blog_card'>
                <div className="page_width">
                    <h2>Letest Post</h2>
                    <div className="posts">
                        {
                            blogs?.map((item, index) => {
                                return (
                                    <PostCard
                                    key={index}
                                        id={item._id}
                                        desc={item.description}
                                        authorimg={item.author_image}
                                        Aname={item.author_name}
                                    />
                                )
                            })
                        }
                        
                    </div>
                    <div className="view">
                        <button>View All Post</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs
