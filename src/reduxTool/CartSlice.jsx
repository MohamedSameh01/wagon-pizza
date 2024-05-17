/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addMeal: (state, action) => {
      try {
        const meal = action.payload;
        const exist = state.cart.find((x) => x.id === meal.id);
        if (exist) {
          exist.quantity++;
          exist.totalPrice += parseFloat(exist.price);
          state.totalItems++;
          state.totalPrice += parseFloat(exist.price);
        } else {
          state.cart.push({
            id: meal.id,
            quantity: 1,
            totalPrice: meal.price,
            price: parseFloat(meal.price),
            name: meal.name,
            photoName: meal.photoName,
            offerNr: meal.offerNr,
            description1: meal.description1,
            description2: meal.description2,
            description3: meal.description3,
          });
          state.totalItems++;
          state.totalPrice += parseFloat(meal.price);
        }
      } catch (err) {
        console.log("error in add meal", err);
      }
    },
    deleteMeal: (state, action) => {
      try {
        const meal = action.payload;
        const exist = state.cart.find((x) => x.id === meal.id);
        if (exist.quantity > 1) {
          exist.quantity--;
          exist.totalPrice -= parseFloat(exist.price);
          state.totalItems--;
          state.totalPrice -= parseFloat(exist.price);
        } else if (exist.quantity === 1) {
          state.cart = state.cart.filter((x) => x.id !== meal.id);
          state.totalItems--;
          state.totalPrice -= parseFloat(meal.price);
        }
      } catch (err) {
        console.log("error in delete item", err);
      }
    },
    removeMeal: (state, action) => {
        try{
            const meal=action.payload;
            const exist=state.cart.find((x)=>x.id===meal.id);
            state.totalItems-=exist.quantity;
            state.totalPrice-=exist.quantity*parseFloat(meal.price);
            state.cart=state.cart.filter((x)=>x.id!==meal.id);

        }catch(err){
            console.log("can't remove this meal",err)
        }
    },
  },
});

export const { addMeal,deleteMeal,removeMeal } = CartSlice.actions;
export default CartSlice.reducer;
