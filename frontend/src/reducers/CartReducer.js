const cartReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'REMOVE':
      return state.filter(product => product.productId !== action.payload)
    default:
      return state
  }
}

export default cartReducer