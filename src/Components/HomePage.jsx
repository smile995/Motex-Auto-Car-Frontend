import { AiFillCar } from "react-icons/ai";
import { useEffect, useState } from "react";
import banner from "../../public/bannerCar.jpg"



const HomePage = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('/public/Brand.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);

    const bannerStyle = {
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

    };
    return (
        <div>

            {/* banner part */}
            <div className="hero min-h-screen mt-10 " style={bannerStyle} >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 md:text-7xl text-4xl font-bold">Driving<span className="text-red-600">Dreams</span> <br /> One Car at a Time</h1>
                        <p className="mb-5">This version emphasizes the transformation of dreams into reality through your car dealership, which may align better with your brand and message.</p>
                        <button className="btn btn-primary hover:bg-red-600">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center">
                <div className="flex gap-3 items-center justify-center">
                    <AiFillCar className="text-red-600 text-2xl"></AiFillCar>
                    <p className="text-red-600 text-xl font-semibold">  POPULAR BRANDS</p>
                </div>

                <h1 className="md:text-5xl text-3xl font-bold">Our Top Quality <span className="text-red-600">Brands</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5 mt-10 ">

                    {
                        brands.map(brand => <div key={brand.id} className="p-5 bg-slate-100 rounded-lg hover:translate-y-3 duration-500 delay-75 hover:bg-red-50 hover:text-red-600" >
                            <div className="flex justify-center items-start"> 
                                <img className=" h-40 text-center" src={brand.brand_logo} alt="" />
                            </div>
                            <p className="text-lg font-semibold ">{brand.brand_name}</p>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default HomePage;