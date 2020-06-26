export const AddToCart = (product) => {
  return {
    type: "ADD",
    payload: product
  }
}

export const RemoveFromCart = (product) => {
  return {
    type: "REMOVE",
    payload: product
  }
}