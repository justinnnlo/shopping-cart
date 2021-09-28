import axios from "axios";

const baseUrl = "http://localhost:5000/api";

const getAllProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    const newResponse = response.data.map((product) => {
      return { ...product, id: product._id };
    });

    return newResponse;
  } catch (e) {
    console.log(e);
  }
};

const addProduct = async (product) => {
  try {
    const response = await (
      await axios.post(`${baseUrl}/products`, product)
    ).status(200);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export { getAllProducts, addProduct };
