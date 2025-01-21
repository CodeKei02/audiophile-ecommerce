export const cartReducer = (state, action) => {

  switch (action.type) {
    case "ADD_ITEM": {
       const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity } 
              : item
          ),
          totalPrice: state.totalPrice + action.payload.price,
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        totalPrice: state.totalPrice + action.payload.price,
      };
    }
    case "REMOVE_ITEMS": {
      return {
        ...state,
        items: [],
        totalPrice: 0,
      }
    }
    case "INCREASE_QUANTITY": {
      const itemToIncrease = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemToIncrease) return state;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalPrice: state.totalPrice + itemToIncrease.price,
      };
    }
    case "DECREASE_QUANTITY": {
      const itemToDecrease = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!itemToDecrease) return state;
      if (itemToDecrease.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
          totalPrice: state.totalPrice - itemToDecrease.price,
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        totalPrice: state.totalPrice - itemToDecrease.price,
      };
    }
    case "CLEAR_LOCAL_STORAGE": {
      localStorage.clear();
      
      return { 
        ...state, 
        items: [] 
      }; 
    }

    default:
      return state;
  }
};
