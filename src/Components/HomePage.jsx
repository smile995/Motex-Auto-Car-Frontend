
import banner from "../../public/bannerCar.jpg"


const HomePage = () => {
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
                        <h1 className="mb-5 md:text-7xl text-4xl font-bold">Driving<span className="text-red-700">Dreams</span> <br /> One Car at a Time</h1>
                        <p className="mb-5">This version emphasizes the transformation of dreams into reality through your car dealership, which may align better with your brand and message.</p>
                        <button className="btn btn-primary hover:bg-red-700">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;