import Axios from'axios'

const createOrder = async (order) => {
  await Axios.post("http://localhost:8762/order-service/orders", order)
}

export default createOrder