import React from 'react'
import Banner_Img from '../../assets/images/Image.png'
import Img from '../../assets/images/author/author.png'

function Banner() {
    return (
        <div>
            <section className='banner'>
                <div className="page_width">
                    <img src={Banner_Img} alt="" />
                    <div className="card_b">
                        <button className='btn'>Technology</button>

                        {/* <div className="card_content"> */}
                        <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>

                        {/* </div> */}
                        <div className="card_person_contact">
                            <img src={Img} alt="" />
                            <h5>Jason Francisco</h5>
                            <p>August 20, 2022</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
