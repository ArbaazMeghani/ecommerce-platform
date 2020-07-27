import Axios from'axios'
import Keys from '../config/Keys'

const createOrder = async (userInfo, paymentMethod, products, totalPrice) => {
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
    totalCost: totalPrice,
    stripePaymentId: paymentMethod.id
  }
  await Axios.post(Keys.PROXY_URL + Keys.ORDERS_PATH, order)
}

export default createOrder