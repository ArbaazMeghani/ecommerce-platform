import Axios from'axios'

const retrieveProducts = async (callback) => {
  const response = await Axios.get("http://localhost:8762/product-service/products")
  callback(response.data)
}

export default retrieveProducts