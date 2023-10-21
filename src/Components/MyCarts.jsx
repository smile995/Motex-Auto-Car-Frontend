import { useLoaderData } from "react-router-dom";
import CartProducts from "./CartProducts";

const MyCarts = () => {

    const products = useLoaderData()
    return (
        <div>
            <div className="mt-10">
                <h1 className="text-3xl md:text-6xl font-bold text-center" >My Products</h1>
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-3  mt-10">
                {
                    products.map(product => <CartProducts key={product._id} product={product} ></CartProducts>)
                }
            </div>
        </div>
    );
};

export default MyCarts;