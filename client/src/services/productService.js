import axios from "axios";

const baseUrl = 'http://localhost:5000';

const getAllProducts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/products`);
    console.log(response.body);
    return response.body;
  } catch (e) {
    console.log(e);
  }
}

const services = {
  getAllProducts,
}

export default services;