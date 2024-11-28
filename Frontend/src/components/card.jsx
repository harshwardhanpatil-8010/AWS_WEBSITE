import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';



function Card() {
    return (
        <div className="flex items-center justify-center h-auto p-6">
            <div className="max-w-sm w-full bg-gradient-to-br from-green-500 via-blue-500
            to-purple-600 rounded-3xl shadow-2xl overflow-hidden transform transition-transform
            duration-500 hover:scale-105 hover:shadow-3xl">
                <div className="relative">
                    <img
                        className="w-full h-56 object-cover object-center rounded-t-3xl"
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20240812133752/gfg.jpg"
                        alt="Profile"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex justify-center -translate-y-1/2">
                        <div className="w-28 h-28 rounded-full bg-white shadow-xl border-4 border-white">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20240812133752/gfg.jpg"
                                alt="Avatar"
                            />
                        </div>
                    </div> 
                </div>
                <div className="pt-20 pb-8 px-6 text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-2 relative group">
                        <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r
                        from-yellow-400 via-red-500 to-pink-500 transition-transform duration-500
                        transform group-hover:translate-x-2 group-hover:translate-y-2">
                        GeeksforGeeks</span>
                        <span className="relative">GeeksforGeeks</span>
                    </h2>
                    <p className="text-white text-lg mb-4 relative group">
                        <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r
                        from-teal-300 via-blue-400 to-purple-600 transition-transform duration-500 
                        transform group-hover:translate-x-2 group-hover:translate-y-2">
                        Web Developer | Designer | Creator</span>
                        <span className="relative">Web Developer | Designer | Creator</span>
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://facebook.com"
                            className="flex items-center justify-center w-12 h-12 rounded-full
                            bg-blue-700 border-4 border-blue-800 text-white hover:bg-blue-600
                            hover:border-blue-700 transition-colors duration-300 transform
                            hover:scale-125"
                            aria-label="Facebook"
                        >
                            <FaFacebook size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            className="flex items-center justify-center w-12 h-12 rounded-full 
                            bg-blue-400 border-4 border-blue-500 text-white hover:bg-blue-300 
                            hover:border-blue-400 transition-colors duration-300 transform
                            hover:scale-125"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            className="flex items-center justify-center w-12 h-12 rounded-full 
                            bg-pink-600 border-4 border-pink-700 text-white hover:bg-pink-500
                            hover:border-pink-600 transition-colors duration-300 transform 
                            hover:scale-125"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="flex items-center justify-center w-12 h-12 rounded-full
                            bg-blue-800 border-4 border-blue-900 text-white hover:bg-blue-700 
                            hover:border-blue-800 transition-colors duration-300 transform 
                            hover:scale-125"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;