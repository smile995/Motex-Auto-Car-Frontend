import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const CartProducts = ({ product }) => {
    const { image, name, type, price, brandName,_id } = product;
    const handleDelete=(_id)=>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <div className=" bg-base-100 shadow-xl flex gap-3 ">
            <figure><img className='flex grow' src={image} alt="Movie" /></figure>
            <div className="md:flex justify-between items-center ">
                <div>
                    <h2 className="card-title">Category:{type}</h2>
                    <h2 className="card-title">Brand:{brandName}</h2>
                    <h2 className="card-title"> Name:{name}</h2>
                    <h2 className="card-title">Price: $ {price}</h2>

                </div>
                <div className=" justify-end ">
                    <div className="btn-group lg:btn-group-vertical  items-center space-y-3">
                        <Link to={'/update'}>
                            <button className="btn btn-secondary">Update</button>
                        </Link>
                        <button 
                        onClick={()=>handleDelete(_id)}
                        className="btn btn-warning">Delete</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;