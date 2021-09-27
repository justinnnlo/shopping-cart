import { useState } from "react";

const AddProductForm = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setVisible(!visible);
  };

  const display = visible ? "block" : "none";

  return (
    <div className="add-form">
      <p>
        <a className="button add-product-button" href="#" onClick={handleClick}>
          Add A Product
        </a>
      </p>
      <>
        <h3 className={visible ? ".add-form.visible" : ".add-form"}>
          Add Product
        </h3>
        <form className={visible ? ".add-form.visible" : ".add-form"}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value="" />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value="" />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value="" />
          </div>

          <div className="actions form-actions">
            <a href="#" className="button">
              Add
            </a>
            <a href="#" className="button">
              Cancel
            </a>
          </div>
        </form>
      </>
    </div>
  );
};

export default AddProductForm;
