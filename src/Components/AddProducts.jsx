import Swal from 'sweetalert2'

const AddProducts = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const addProduct = { image, name, brandName, type, price, description, rating };
        
        // newproduct adding request
        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })

            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Added Successfully',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });



    }
    return (


        <div className="flex justify-center mt-10">
            <form onSubmit={handleAddProduct}>
                <div>
                    <h1 className='md:text-5xl text-3xl font-bold mb-5 '>Add Your New Product</h1>
                </div>
                <div className=" mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Image Url</span>
                        <input type="text" name="image" placeholder="Image Url" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=" mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Name</span>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=" mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">BrandName</span>
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=" mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Type</span>
                        <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=" mb-3 ">
                    <label className="input-group ">
                        <span className="md:w-40 text-center">Price</span>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=" mb-3 ">
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
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div>
                    {/* <button className="btn btn-primary w-full hover:btn-secondary">Tape To Add</button> */}
                    <input className="btn btn-primary w-full hover:btn-secondary" type="submit" value="Add product" />
                </div>
            </form>
        </div>



    );
};



export default AddProducts;