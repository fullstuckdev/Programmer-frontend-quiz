import { useState } from "react";
import Swal from "sweetalert2";

const AddTask = ({ onSave }) => {
  
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!product || !price || !quantity) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Harap isi semua kolom!",
      });
    } else if (quantity < 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Quantity tidak boleh kosong",
      });
    } 
      else {
    
      onSave({ product, price, quantity });
    }

    setProduct("");
    setPrice("");
    setQuantity("");
  };

  return (
   
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Product name</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Product Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
};

export default AddTask;
