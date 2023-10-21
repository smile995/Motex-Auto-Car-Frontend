

const ProductCard = ({ product }) => {
    console.log(product);
    const { image, name, description,price } = product
    // const handleDetails=(_id)=>{

    // }
    return (
        <div className="card  bg-slate-100 shadow-xl mt-10">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title">{name}</h2>
                <h2 className="card-title">$ {price} </h2>
                </div>
                <p>{description}</p>
                <div className="card-actions ">
                    <button onClick={(()=>handleDetails(_id))} className="btn btn-primary w-full">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;