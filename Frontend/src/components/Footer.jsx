import React from "react";

const Footer = () => {
    return (
        <div className="footerBox bg-slate-900 radius-2xl text-white flex-auto justify-content ">
            <h1>
                A Computer Science Portal for Geeks!
            </h1>
           <div>
                <div>
                    <div className="grid gap-4 grid-cols-3 grid-rows-3">
                        <h1>About Us</h1>
                        <div href="#">
                            Aim
                        </div>
                        <div href="#">
                            Vision
                        </div>
                        <div href="#">
                            Testimonials
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-3 grid-rows-3">
                        <h2>Services</h2>
                        <div href="#">
                            Writing
                        </div>
                        <div href="#">
                            Internships
                        </div>
                        <div href="#">
                            Coding
                        </div>
                        <div href="#">
                            Teaching
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-3 grid-rows-3">
                        <h2>Contact Us</h2>
                        <div href="#">
                            Uttar Pradesh
                        </div>
                        <div href="#">
                            Ahemdabad
                        </div>
                        <div href="#">
                            Indore
                        </div>
                        <div href="#">
                            Mumbai
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-3 grid-rows-3">
                        <h2>Social Media</h2>
                        <div href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </div>
                        <div href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </div>
                        <div href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </div>
                        <div href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};
export default Footer;