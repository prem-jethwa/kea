export function addItemToCart(state, action) {
  if (!state.isSignup) return state;

  const itemExist = state.user.cart.find(
    (item) => item.id === action.payload.id
  );

  if (!itemExist) {
    state.user.cart.push(action.payload);
  } else {
    itemExist.qtn++;
  }
}

export function removeItemFromCart(state, action) {
  if (!state.isSignup) return state;
  const itemExist = state.user.cart.find(
    (item) => item.id === action.payload.id
  );

  if (itemExist.qtn === 1) {
    state.user.cart = state.user.cart.filter(
      (item) => item.id !== action.payload.id
    );
  } else {
    itemExist.qtn--;
  }
}

export function setSignup(state, action) {
  if (action.payload !== true && action.payload !== false) return state;

  state.isSignup = action.payload;
}

export function setUserDetails(state, action) {
  if (!state.isSignup) return state;

  const { name, email, address } = action.payload;

  state.user.name = name;
  state.user.email = email;
  state.user.address = address;
}

export function clearCart(state) {
  state.user.cart = [];
}

// Localstorage
export const setLocal = (state) => {
  //   if (!state.isSignup) return state;
  localStorage.setItem("user", JSON.stringify(state.user));
};

export const getLocal = (state) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return state;

  if (!user.name || !user.email || !user.address) return state;

  state.isSignup = true;
  state.user.name = user.name;
  state.user.email = user.email;
  state.user.address = user.address;
  state.user.cart = user.cart;
};

export const clearLocal = () => {
  localStorage.removeItem("user");
};
