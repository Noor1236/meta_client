import React, { useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const CreateBlogPost = () => {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');
    const [longDescription, setLongDescription] = useState("Please Write your blog content")
    const [authorName, setAuthorName] = useState('')

    const formData = {
        title: title,
        description: description,
        long_description: longDescription,
        author_name: authorName
    }

    const submitBlogFrom = () => {
        axios.post('https://server-theta-taupe.vercel.app/create_blog', formData)
            .then(function (response) {
                console.log(response);
                toast(response.data.msg, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="page_width">
                <div className="blog_post_form">
                    <div className="emai create_post_input">
                        <input type="text" placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="emai create_post_input">
                        <input type="text" placeholder='Enter Small Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="emai create_post_input">
                        <input type="text" placeholder='Enter Author Name' value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
                    </div>

                    <ReactQuill theme="snow" value={longDescription} onChange={setLongDescription} className='creat_post_editor' />
                    <br />
                    <button onClick={submitBlogFrom} >Submit Post</button>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateBlogPost