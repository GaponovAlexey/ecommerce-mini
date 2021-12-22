import React, { FC, useState } from 'react'

export const Quntity: FC = () => {
  const [count, setVALUE] = useState<number>(0)

  return (
    <div className='items-center'>
      <button onClick={() => setVALUE((prev) => prev - 1)}>-</button>
      <input
        type='number'
        value={count}
        onChange={(e) => setVALUE(+e.target.value)}
        className='mx-1 w-10'
      />
      <button onClick={() => setVALUE((prev) => prev + 1)}>+</button>
    </div>
  )
}
