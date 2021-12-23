import React, { FC, useState } from 'react'
import { IProduct } from '../../type'
import { ProductItem } from './ProductItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export const Products: FC = () => {
  const products = useSelector((state: RootState) => state.count.products)

  return (
    <div className='m-6'>
      {products.map((el) => (
        <ProductItem key={el.id} product={el} />
      ))}
    </div>
  )
}
