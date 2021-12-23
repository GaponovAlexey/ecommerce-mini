import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/state'
import { RootState } from '../store/store'

export const Quntity: FC = () => {
  // const [count, setVALUE] = useState<number>(0)
  const dispatch = useDispatch()
  
  const { count } = useSelector((state: RootState) => state.count)
  
  console.log(count);
  return (
    <div className='items-center'>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        type='number'
        value={count}
        onChange={(el) => dispatch(incrementByAmount(+el.target.value))}
        className='mx-1 w-10'
      />
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
