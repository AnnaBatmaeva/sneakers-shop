import axios from 'axios';

export async function getProducts(filters = {}) {
    const params = {};
    if (filters.brand?.length) {
        params.brand = filters.brand.join(',');
    }

    if (filters.gender?.length) {
        params.gender = filters.gender.join(',');
    }
    const response = await axios.get('http://localhost:5100/products', { params });
    return response.data;
}

export async function getProduct(productID) {
    const response = await axios.get(`http://localhost:5100/products/${productID}`);
    console.log(response.data)
    return response.data;
}
