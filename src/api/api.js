const API_URL = "https://api.example.com";

export function fetchProducts() {
  return axios.get(`${API_URL}/products`);
}

export function fetchProduct(id) {
  return axios.get(`${API_URL}/products/${id}`);
}