import { Link } from "react-router-dom"
import HeartIcon from "./HeartIcon"


const Product = ({product}) => {
  return (
    <div className="w-[30rem] ml-[2rem] p-3 relative">
        <div className="relative">
            <img src={Product.image} alt={product.name} className="w-[30rem] rounded" />

            <HeartIcon product={product} />

        </div>

        <div className="p-4">
            <Link to={`/product/${product._id}`}>
                <h2 className="flex justify-between items-center">
                    <div className="text-lg">{product.name}</div>
                    <span className="bg-pink-100 text-pink-800 font-medium text-sm mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
                       Rs {product.price}
                    </span>
                </h2>
            </Link>
        </div>

    </div>
  )
}

export default Product