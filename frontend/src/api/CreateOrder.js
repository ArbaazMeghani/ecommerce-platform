import Axios from'axios'

const createOrder = async (userInfo, products, totalPrice) => {
  const order = {
    customer: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phoneNumber: userInfo.phone,
      address: {
        streetAddress: userInfo.streetAddress,
        city: userInfo.city,
        state: userInfo.state,
        zipCode: userInfo.zipCode
      }
    },
    products: products,
    totalCost: totalPrice
  }
  await Axios.post("http://localhost:8762/order-service/orders", order)
}

export default createOrder