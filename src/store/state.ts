import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../type'

export interface CounterState {
  count: number
  products: Array<IProduct>
  
}

const initialState: CounterState = {
  count: 0,
  products: [
    {
      id: Date.now(),
      name: 'Ноутбук Apple MacBook Pro, Z15J000D6, серебристый',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 267690,
    },
    {
      id: Date.now(),
      name: 'Apple MacBook Pro 14.2", Apple M1 Pro 10 core 32ГБ, 5122ГБ SSD, Mac OS, Z15G000D4',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 494990,
    },
    {
      id: Date.now(),
      name: 'Apple MacBook Pro 14.2", Apple M1 Max 10 core 32ГБ, 1ТБ SSD, Mac OS, Z15H0007B',
      imagePath: 'https://items.s1.citilink.ru/1623730_v01_b.jpg',
      price: 294990,
    },
  ]

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
    addCard: (state, {payload}) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer