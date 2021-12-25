import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,  } from '../store/state'
import { RootState } from '../store/store'

interface prop {
  id: number
}

export const Quntity: FC<prop> = (id) => {
  const dispatch = useDispatch()

  const { count } = useSelector((state: RootState) => state.count)

  return (
    <div className='items-center'>
      <button onClick={() => dispatch(decrement(id))}>-</button>
      <input
        type='number'
        value={count}
        className='mx-1 w-10'
      />
      <button onClick={() => dispatch(increment(id))}>+</button>
    </div>
  )
}
