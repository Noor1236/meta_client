import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineMail } from "react-icons/md";
import Logo from '../../assets/logo/Logo.svg'

function Footer() {
    const [footerColor, setFooterColor] = useState('#181a2a');
    
    return (
        <div>
            <footer id="footer" style={{ backgroundColor: footerColor }}>
                <div className="page_width">
                    <div className="inner_footer">
                        <div className="footer_col_one">
                            <h3>About</h3>
                            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                            <p className='info'> Email : <a href="mailto:info@jstemplate.net">info@jstemplate.net</a></p>

                            <p className='info'> Phone : <a href="tel: +880 123 456 789">880 123 456 789</a></p>


                        </div>
                        <div className="footer_col_two">
                            {/* <h3>Quick Link</h3> */}
                            <ul>
                                <li>
                                    Quick Link
                                </li>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Archived</a>
                                </li>
                                <li>
                                    <a href="#">Author</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                            {/* <h3>Category</h3> */}
                            <ul>
                                <li>
                                    Category
                                </li>
                                <li>
                                    <a href="#">Lifestyle</a>
                                </li>
                                <li>
                                    <a href="#">Technology</a>
                                </li>
                                <li>
                                    <a href="#">Travel</a>
                                </li>
                                <li>
                                    <a href="#">Bussiness</a>
                                </li>
                                <li>
                                    <a href="#">Economy</a>
                                </li>
                                <li>
                                    <a href="#">Sports</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_col_three">
                            <div className="card">
                                <h2>Weekly Newslette</h2>
                                <p>Get blog articles and offers via email</p>
                                <div className="emai">
                                    <input type="text" placeholder='Enter Email' />
                                    <MdOutlineMail />
                                </div>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="outer_footer">
                        <div className="outer_logo">
                            <Link to="/" ><img src={Logo} alt="" /></Link>
                            <div className="content">
                                <h2>Meta <span>Blog</span></h2>
                                {/* <br />
                                <br /> */}
                                <p>© <span>JS Template</span> 2023. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="other_content">
                            <ul>
                                <li>
                                    <a href="">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Cookie Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
