import Axios from'axios'
import Keys from '../config/Keys'

const retrieveProducts = async (callback) => {
  const response = await Axios.get(Keys.PROXY_URL + Keys.PRODUCTS_PATH)
  callback(response.data)
}

export default retrieveProducts