import React, { useEffect, useState } from "react";
// import pillow from "/images/pillow6.jpg";
import { CiHeart } from "react-icons/ci";
import { FaCodeCompare } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Layout from '../Components/Layout/Layout'
import { useParams } from "react-router-dom";
import product from "../Constants/Products";

const ProductView = () => {
    const params = useParams()
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')

    const getProductById = (id) => {
        return product.find(p => p.id === parseInt(id));
    };
    console.log(params.id)

    useEffect(() => {
        const product = getProductById(`${params.id}`);
        console.log(product)
        setTitle(product.name)
        setImage(product.img)
        setDes(product.description)
        setPrice(product.price)

    }, [params.id])
    return (
        <Layout>
            <div className="my-14 mb-20 overflow-x-hidden">
                <div className="main flex flex-col lg:flex-row w-full h-full gap-8 lg:gap-16 mx-4 lg:mx-20">
                    <div className="image w-full lg:w-1/2 h-auto">
                        <img src={image} className="rounded w-full" alt="Product" />
                    </div>
                    <div className="data mt-10 space-y-8 w-full lg:w-1/2">
                        <p className="text-2xl lg:text-3xl">{title}</p>
                        <p className="text-xl lg:text-2xl">Price: {price}</p>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                            <div className="flex items-center border border-orange-500 rounded w-full max-w-[150px]">
                                <button className="w-1/3 px-4 py-2 text-lg lg:text-xl text-black hover:bg-gray-200">
                                    -
                                </button>
                                <div className="w-1/3 px-4 py-2 text-lg lg:text-xl text-center border-l border-r border-orange-500">
                                    1
                                </div>
                                <button className="w-1/3 px-4 py-2 text-lg lg:text-xl text-black hover:bg-gray-200">
                                    +
                                </button>
                            </div>
                            <button className="p-3 rounded text-white font-semibold bg-orange-500 hover:bg-orange-600 w-full lg:w-auto">
                                Add to Cart
                            </button>
                        </div>
                        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <CiHeart className="text-xl text-black group-hover:text-orange-500 transition duration-300" />
                                <span className="text-black group-hover:text-orange-500 transition duration-300">
                                    Add to Wishlist
                                </span>
                            </div>
                            <div className="flex items-center space-x-2 group cursor-pointer">
                                <FaCodeCompare className="text-xl text-black group-hover:text-orange-500 transition duration-300" />
                                <span className="text-black group-hover:text-orange-500 transition duration-300">
                                    Add to Compare
                                </span>
                            </div>
                        </div>
                        <div className="social flex items-center gap-5 text-lg lg:text-xl">
                            <p>Share:</p>
                            <FaFacebook className="hover:text-orange-500" />
                            <FaTwitter className="hover:text-orange-500" />
                            <FaInstagram className="hover:text-orange-500" />
                        </div>
                    </div>
                </div>
                <div className="mx-4 lg:mx-20 mt-10">
                    <h1 className="text-lg lg:text-2xl text-center">Description</h1>
                    <div className="h-0.5 w-full lg:w-3/4 mt-3 mb-2 bg-black mx-auto"></div>
                    <p className="border-2 rounded p-5 mt-5 text-sm lg:text-base">
                        {des}
                    </p>
                </div>

            </div>
        </Layout>
    )
}

export default ProductView