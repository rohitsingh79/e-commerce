  
  const CartReducer = (state , action) => {
    switch(action.type){
        case 'ADD_ITEM': return [...state, action.payload];
        default: return state;
    }
  }

  export default CartReducer;