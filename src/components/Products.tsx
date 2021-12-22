import React, { FC, useState } from 'react'
import { IProduct } from '../type'

export const Products: FC = () => {
  const [products, setPRODUCTS] = useState<IProduct[] | []>([
    { id: 1, name: 'alexey', imagePath: 'path', price: 500000 },
  ])

  return <div className='mt-4'>Products</div>
}
