import { NavLink } from "react-router";
function App() {

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


  return (
    <div className="m-8 ">
      This is APP .JSX
      <br />
      <img src="/public/image.png" alt="flowers" />
      <NavLink to="/about" end>
        About
      </NavLink> <br />
      <NavLink to="/contact" end>
        Contact US
      </NavLink> <br />
      <br />
      <h1>Ecommerce Products</h1>
      <div className="flex gap-2">
        {products.map((product) =>{
          return(
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.desc}</p>
              <p>{product.price}</p>
              <img src={product.imageURL} alt={product.name} width={300} />
              <NavLink to={`/products/${product.id}`} className="text-blue-800">Details</NavLink>
            </div>
          )

        })}

      </div>
    </div>
  )
}

export default App;