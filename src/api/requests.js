import axios from 'axios';

export async function getProducts() {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
}

export async function getProduct(productID) {
    const response = await axios.get(`http://localhost:5000/products/${productID}`);
    console.log(response.data)
    return response.data;
}
