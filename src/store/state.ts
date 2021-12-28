import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem, IProduct } from '../type'

export interface CounterState {
  count: 0
  products: Array<IProduct>
  basket: Array<ICartItem>
}

const initialState: CounterState = {
  count: 0,
  products: [
    {
      id: 1,
      name: 'Apple MacBook Pro, 10 core 62ГБ, 5122ГБ',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 267690,
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 14.2"10 core 32ГБ, 5122ГБ',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 494990,
    },
    {
      id: 3,
      name: 'Apple MacBook Pro 14.2" 10 core 32ГБ, 1ТБ ',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 294990,
    },
  ],
  basket: [
    {
      id: 0,
      imagePath: 'https://items.s1.citilink.ru/1624332_v01_b.jpg',
      name: 'MacBook Pro 14.2", Apple M1 Max',
      count: 1,
      price: 5520,
    },
  ],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const newOrder = state.basket.map((el) => {
        if (el.id === payload.id) {
          const newQuntity = el.count + 1
          return {
            ...el,
            count: newQuntity,
          }
        } else {
          return el
        }
      })
      state.basket = newOrder
    },
    decrement: (state, { payload }) => {
      const newOrder = state.basket.map((el) => {
        if (el.id === payload.id) {
          const newQuntity = el.count - 1
          return {
            ...el,
            count: newQuntity,
          }
        } else {
          return el
        }
      })
      state.basket = newOrder
    },
    removeItem: (state, { payload }) => {
      state.basket = state.basket.filter((el) => el.id !== payload.id)
    },
    addItem: (state, { payload }) => {
      const realId = state.basket.find((el) => el.id === payload.id)
      if (!realId) {
        state.basket.push({
          id: payload.id,
          imagePath: payload.imagePath,
          name: payload.name,
          price: payload.price,
          count: state.count + 1,
        })
      } else {
        realId.count += 1
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeItem, addItem, increment, decrement } =
  counterSlice.actions

export default counterSlice.reducer
