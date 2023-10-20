import { IoIosPricetags } from "react-icons/io";
import { AiFillCar  } from "react-icons/ai";
import { AiFillSafetyCertificate } from "react-icons/ai";

const Why = () => {
    return (
        <div className="mt-10 ">
            <h1 className="md:text-6xl text-3xl font-bold text-center">Why Choose Us?</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5">
                <div className="text-center bg-blue-100 rounded-lg p-5">
                    <div className="flex justify-center">
                        <IoIosPricetags className="text-7xl text-red-600"></IoIosPricetags>
                    </div>
                    <h1 className="text-2xl font-semibold my-2">Best Price</h1>
                    <p >Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="text-center bg-blue-100 rounded-lg p-5">
                    <div className="flex justify-center">
                        <AiFillCar className="text-7xl text-red-600"></AiFillCar>
                    </div>
                    <h1 className="text-2xl font-semibold my-2">Trusted By Thousands</h1>
                    <p >Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>
                <div className="text-center bg-blue-100 rounded-lg p-5">
                    <div className="flex justify-center">
                        <AiFillSafetyCertificate className="text-7xl text-red-600"></AiFillSafetyCertificate>
                    </div>
                    <h1 className="text-2xl font-semibold my-2">Wide Range of Brands</h1>
                    <p >Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>

            </div>
        </div>
    );
};

export default Why;