import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { useLocation, useParams } from 'react-router-dom'
import PageBanner from '../Components/PageBanner'
import LineBar from '../Components/LineBar'
import ProductCard from '../Components/Products/ProductCard'
import product from '../Constants/Products'

const CategoryPage = () => {
    const location = useLocation()
    const params = useParams()
    const [products, setProducts] = useState([])

    const getProductByCategory = (catogeries) => {
        return product.filter(p => p.catogeries === catogeries);
    };
    useEffect(() => {
        const product = getProductByCategory(`${params.catogeries}`)
        setProducts(product)
    }, [params.catogeries])
    return (
        <Layout>
            <PageBanner name={params.catogeries} path={location.pathname} />
            <LineBar product={'5'} />

            <div className="flex justify-center items-center flex-wrap gap-5">
                {products.map((product) => (
                    < ProductCard key={product.id} prop={product} />
                ))}
            </div>
        </Layout>
    )
}

export default CategoryPage