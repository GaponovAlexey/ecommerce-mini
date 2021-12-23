import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICartItem, IProduct } from '../type'

export interface CounterState {
  count: number
  products: Array<IProduct>
  basket: Array<ICartItem>
}

const initialState: CounterState = {
  count: 0,
  products: [
    {
      id: 1,
      name: 'Ноутбук Apple MacBook Pro, Z15J000D6, серебристый',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 267690,
    },
    {
      id: 2,
      name: 'Apple MacBook Pro 14.2", Apple M1 Pro 10 core 32ГБ, 5122ГБ SSD, Mac OS, Z15G000D4',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 494990,
    },
    {
      id: 3,
      name: 'Apple MacBook Pro 14.2", Apple M1 Max 10 core 32ГБ, 1ТБ SSD, Mac OS, Z15H0007B',
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
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    removeItem: (state, { payload }) => {
      state.basket = state.basket.filter((el) => el.id !== payload.id)
    },
    addItem: (state, { payload }) => {
      state.basket.push(payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { removeItem, addItem, increment, decrement, incrementByAmount } =
  counterSlice.actions

export default counterSlice.reducer
