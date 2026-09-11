import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router";

const ProductDetail = () => {
    const param = useParams();
    const id = param.id;
    const products = [
        {
            id: 1,
            name: "RTX 5070",
            desc: "High performance graphics card",
            price: 100,
            imageURL:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzus2FBMIL9WscN_GYyFE6fLOW8Y3VXLrhQ&s",
        },
        {
            id: 2,
            name: "Samsung S25 Ultra",
            desc: "High resolution monitor",
            price: 200,
            imageURL:
                "https://images.samsung.com/pk/smartphones/galaxy-s25-ultra/buy/product_color_silverBlue_PC.png",
        },
    ];

    const productInfo = products.filter((product) => product.id === parseInt(id))[0];
    return (
        <div className="min-h-screen bg-gray-100 py-8">

            <div className="max-w-6xl mx-auto px-4">
                <NavLink to="/" end>
                    Back to Home
                </NavLink>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    This is a Dynamic Project Page. {id}
                </div>
            </div>
            <br />

            <h1>{productInfo.name}</h1>
            <img src={productInfo.imageURL} alt={productInfo.name} />
            <h3>{productInfo.price}PKR</h3><br />
            <p>{productInfo.desc}</p>

        </div>
    )
}

export default ProductDetail;