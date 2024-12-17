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
            item.id === item.payload.id
              ? { ...item, quantity: item.quantity + 1 }
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
    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }

    case "INCREASE_QUANTITY": {
      const itemToIncrease = state.items.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === item.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalPrice: state.totalPrice + itemToIncrease.price,
      };
    }
    case "DECREASE_QUANTITY": {
      const itemToDecrease = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrease.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === item.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalPrice: state.totalPrice - itemToDecrease.price,
        };
      }

      return state;
    }
    default:
      return state;
  }
};
