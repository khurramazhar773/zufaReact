import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import PageBanner from '../Components/PageBanner'
import LineBar from '../Components/LineBar'
import ProductCard from '../Components/Products/ProductCard'
import product from '../Constants/Products'

const ShopPage = () => {
    const params = useParams()
    let path = params.path

    return (
        <Layout>
            <PageBanner name={'Shop'} path={'/shop'} />
            <LineBar product={'20'} />

            <div className="flex justify-center items-center flex-wrap gap-5">
                {product.map((product) => (
                    < ProductCard key={product.id} prop={product} />
                ))}
            </div>
        </Layout>
    )
}

export default ShopPage