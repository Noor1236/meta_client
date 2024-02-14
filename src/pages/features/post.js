import React from 'react'
import Img from '../../assets/images/author/author_1.png'
import SPImg from '../../assets/images/single_post_imgs/SP.svg'
import SPImg1 from '../../assets/images/single_post_imgs/SP_1.svg'
import Ads from './ads'
import parse from 'html-react-parser'


function Post({blog}) {
    return (
        <div>
            <section className='single_post'>
                <div className="page_width">
                    <div className="inner_single_post">
                        {/* Blog Card */}
                        <div className="img_content">
                            <button>{blog?.title}</button>

                            <h2>{blog?.description}</h2>

                            <div className="author_info">
                                <img src={Img} alt="" />
                                <h5>{blog?.author_name}</h5>
                                <p>August 20, 2022</p>
                            </div>
                        </div>

                        {/* Image */}

                        {blog?.title == 1 && (
                            <div className="post_img">
                                <img src={SPImg} alt="" />
                            </div>
                        )}


                        {/* Description */}

                        <div className="single_blog_data">
                            {parse(blog?.long_description ? blog?.long_description : '')}
                        </div>

                        {/* <div className="post_desc">

                            <h2>Research Your Destination</h2>

                            <p>Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.</p>

                        </div>

                        <div className="post_desc">

                            <h2>Plan Your Itinerary</h2>

                            <p>While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.</p>

                            <p>Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.</p>

                        </div>

                        <div className="quote">

                            <p>“ Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. ”</p>

                        </div> */}

                        {/* Image */}

                        {/* <div className="post_img">
                            <img src={SPImg1} alt="" />
                        </div> */}

                    </div>

                    <Ads />

                    {/* <div className="inner_single_post">

                        <div className="post_desc">

                            <h2>Pack Lightly and Smartly</h2>

                            <p>Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.</p>

                        </div>

                        <div className="post_desc">

                            <h2>Stay Safe and Healthy</h2>

                            <p>Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.</p>

                        </div>

                        <div className="post_desc">

                            <h2>Immerse Yourself in the Local Culture</h2>

                            <p>One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.</p>

                        </div>

                        <div className="post_desc">

                            <h2>Capture Memories</h2>

                            <p>Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.</p>

                        </div>

                        <div className="post_desc">

                            <h2>Conclusion:</h2>

                            <p>Traveling is an art form that requires a blend of planning, preparation, and spontaneity. By following these tips and tricks, you can make the most of your journey and create memories that last a lifetime. So pack your bags, embrace the adventure, and enjoy the ride.</p>

                        </div>

                    </div> */}
                </div>

            </section>
        </div>
    )
}

export default Post
