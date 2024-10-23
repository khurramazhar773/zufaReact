import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../Constants/blogData';
import Layout from '../Components/Layout/Layout';

export default function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogData.find((item) => item.id === parseInt(id));

    if (!blog) {
        return (
            <div className="container mx-auto px-4 py-10">
                <p className="text-center text-gray-500">Blog not found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="text-blue-500 hover:underline mt-4"
                >
                    &larr; Back to Blogs
                </button>
            </div>
        );
    }

    return (
        <Layout>
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 py-10 max-w-5xl">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="text-orange-500 hover:underline mb-6"
                    >
                        &larr; Back to Blogs
                    </button>

                    {/* Blog Title */}
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-gray-800 leading-tight">
                        {blog.title}
                    </h1>

                    {/* Author and Time */}
                    <div className="flex items-center text-gray-500 text-sm mb-6 space-x-2">
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 text-gray-400 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2 5a2 2 0 012-2h2a2 2 0 012 2v1h4V5a2 2 0 012-2h2a2 2 0 012 2v1h1a1 1 0 010 2h-1v8a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1H8v1a2 2 0 01-2 2H4a2 2 0 01-2-2V8H1a1 1 0 110-2h1V5zm2 3v8h2V8H4zm10 0v8h2V8h-2z" />
                            </svg>
                            <span>{blog.author}</span>
                        </div>
                        <span>&bull;</span>
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 text-gray-400 mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M6 2a1 1 0 000 2h1v1H5a1 1 0 000 2h2v2H5a1 1 0 000 2h2v1H6a1 1 0 000 2h1v1a1 1 0 002 0v-1h2v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1v-1h2a1 1 0 000-2h-2V7h2a1 1 0 000-2h-2V4h1a1 1 0 000-2h-1V1a1 1 0 10-2 0v1H9V1a1 1 0 10-2 0v1H6z" />
                            </svg>
                            <span>{blog.time} ago</span>
                        </div>
                    </div>

                    {/* Blog Image */}
                    <div className="w-full mb-8">
                        <img
                            src={blog.image}
                            alt="Blog Visual"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Blog Content */}



                </div>
            </div>
        </Layout>
    );
}
