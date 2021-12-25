import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/state'
import { RootState } from '../store/store'

interface prop {
  id: number
}

export const Quntity: FC<prop> = (id) => {
  const dispatch = useDispatch()

  const { count } = useSelector((state: RootState) => state.count)

  return (
    <span className='items-center text-3xl text-orange-700 '>
      <button
      className=''
      onClick={() => dispatch(decrement(id))}>-</button>
      <button onClick={() => dispatch(increment(id))}>+</button>
    </span>
  )
}
