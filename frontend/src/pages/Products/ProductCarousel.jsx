import { useGetTopProductsQuery } from "../../redux/api/productApiSlice"
import Message from "../../components/Message"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import moment from 'moment'

import { FaBox,
        FaClock,
        FaShoppingCart,
        FaStar,
        FaStore
} from "react-icons/fa"

const ProductCarousel = () => {
    const {data:products, isLoading, error} = useGetTopProductsQuery()

    console.log(products);

    const settings = {
        dots:false,
        Infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        autoplayspeed:3000,
    }


  return (
    <div className="mb-4 xl:block lg:block md:block">
        {isLoading ? null : error ? (
            <Message variant='danger'>
                {error?.data?.message || error.message}
            </Message>
        ):<Slider {...settings} className="xl:w-[50rem] lg:w-[50rem] md:-[56rem] sm:w-[40rem] sm:block">
            {
                products.map(({image, _id, price, description, brand, createdAt, numReviews, rating, quantity, countInStock })=>(
                    <div key={_id}>
                        <img src={image} alt={name} className="w-full rounded-lg object-cover h-[30rem]"  />

                        <div className="flex justify-between w-[20rem]">
                            <div className="one">
                                <h2>{name}</h2>
                                <p>Rs {price}</p> <br />  <br />
                                <p className="w-[25rem]">{description.substring(0,170)}...</p>
                            </div>

                            <div className="flex justify-between w-[20rem]">
                                <div className="one">
                                    <h1 className="flex items-center mb-6 w-[8rem]">
                                        <FaStore className="mr-2 text-white" /> Brand:{brand}
                                    </h1>
                                    <h1 className="flex items-center mb-15 w-[15rem]">
                                        <FaStore className="mr-2 text-white" /> Added:{" "}{moment(createdAt).fromNow()}
                                    </h1>
                                    <h1 className="flex items-center mb-6 w-[8rem]">
                                        <FaStore className="mr-2 text-white" /> Reviews:{numReviews}
                                    </h1>
                                </div>

                                
                            </div>

                        </div>
                    </div>
                ))
            }
            </Slider>}
    </div>
  )
}

export default ProductCarousel