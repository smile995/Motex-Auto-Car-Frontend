

const AddProducts = () => {
    return (

        <div className="flex justify-center mt-10">
            <form >
                <div className="form-control mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Image Url</span>
                        <input type="text" name="image" placeholder="Image Url" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Name</span>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">BrandName</span>
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Type</span>
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Price</span>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Description</span>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="flex items-center gap-6 mb-3">
                    <div className="bg-stone-200 rounded-l-lg px-9 py-3">
                        <p>Rating</p>
                    </div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div>
                    <button className="btn btn-primary w-full hover:btn-secondary">Tape To Add</button>
                </div>
            </form>
        </div>



    );
};



export default AddProducts;