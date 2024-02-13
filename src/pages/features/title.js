import React from 'react'
import bgImg from '../../assets/images/Image.png'
import Img from '../../assets/images/author/author_1.png'

function Title() {
    return (
        <div>
            <section className='page_title'>
                <div className="page_width">
                    <div className="title">
                        <h2>Page TItle</h2>
                        <h3>Home <span>|</span> Link One</h3>
                    </div>

                    <div className="bg_img">
                        <img src={bgImg} alt="" className='pg_img'/>
                        <div className="img_content">
                            <button>Technology</button>

                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>

                            <div className="author_info">
                                <img src={Img} alt="" />
                                <h5>Jason Francisco</h5>
                                <p>August 20, 2022</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Title
