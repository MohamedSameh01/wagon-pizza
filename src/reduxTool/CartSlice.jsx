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
        const meal = action.payload.meal;
        console.log("meal", meal);
        meal.topings = action.payload.selectedExtensions
          ? action.payload.selectedExtensions
          : meal.topings;
        let priceOfTopings = 0;
        if (meal.topings.length > 0) {
          priceOfTopings = meal.topings.reduce((acc, obj) => {
            return acc + obj.price;
          }, 0);
        }
        const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        const exist = state.cart.find(
          (x) => x.id === meal.id && arraysEqual(x.topings, meal.topings)
        );
        if (exist) {
          exist.quantity++;
          exist.totalPrice += parseFloat(exist.price);
          state.totalItems++;
          state.totalPrice += parseFloat(exist.totalPrice);
        } else {
          state.cart.push({
            id: meal.id,
            quantity: 1,
            price: parseFloat(meal.price + priceOfTopings),
            totalPrice: meal.price + priceOfTopings,
            name: meal.name,
            photoName: meal.photoName,
            offerNr: meal.offerNr,
            description1: meal.description1,
            description2: meal.description2,
            description3: meal.description3,
            topings: meal.topings,
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
        const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
        const exist = state.cart.find(
          (x) => x.id === meal.id && arraysEqual(x.topings, meal.topings)
        );
        if (exist.quantity > 1) {
          exist.quantity--;
          exist.totalPrice -= parseFloat(exist.price);
          state.totalItems--;
          state.totalPrice -= parseFloat(exist.price);
        } else if (exist.quantity === 1) {
          const arraysNotEqual = (a, b) =>
            JSON.stringify(a) !== JSON.stringify(b);
          state.cart = state.cart.filter(
            (x) =>
              x.id !== meal.id ||
              (x.id === meal.id && arraysNotEqual(x.topings, meal.topings))
          );
          state.totalItems--;
          state.totalPrice -= parseFloat(exist.totalPrice);
        }
      } catch (err) {
        console.log("error in delete item", err);
      }
    },
    removeMeal: (state, action) => {
      try {
        const meal = action.payload;
        const exist = state.cart.find((x) => x.id === meal.id);
        state.totalItems -= exist.quantity;
        state.totalPrice -= exist.quantity * parseFloat(meal.price);
        const arraysNotEqual = (a, b) =>
          JSON.stringify(a) !== JSON.stringify(b);
        state.cart = state.cart.filter(
          (x) =>
            x.id !== meal.id ||
            (x.id === meal.id && arraysNotEqual(x.topings, meal.topings))
        );
      } catch (err) {
        console.log("can't remove this meal", err);
      }
    },
    addMealFromCart: (state, action) => {
      const meal = action.payload;
      const arraysEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
      const exist = state.cart.find(
        (x) => x.id === meal.id && arraysEqual(x.topings, meal.topings)
      );
      state.totalItems++;
      state.totalPrice += meal.totalPrice;
      exist.quantity++;
      exist.totalPrice += meal.price;
    },
  },
});

export const { addMeal, deleteMeal, removeMeal, addTopings, addMealFromCart } =
  CartSlice.actions;
export default CartSlice.reducer;
