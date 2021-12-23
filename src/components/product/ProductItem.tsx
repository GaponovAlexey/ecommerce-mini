import classNames from 'classnames'
import React, { FC } from 'react'
import { IProduct } from '../../type'
import { Quntity } from '../Quntity'

interface IPporoductItem {
  product: IProduct
}

export const ProductItem: FC<IPporoductItem> = ({ product }) => {
  const addHandler = (id: number) => {
    console.log(id)
  }

  return (
    <div className='shadow-sm rounded-md flex p-5 w-4/5 mx-auto mt-7 bg-white justify-center flex-col center text-center items-center '>
      <img className='h-24 ' src={product.imagePath} alt={product.name} />
      <div className='text-lg font-bold'>{product.name}</div>
      <div className='text-sm text-gray-600'>{product.price}p</div>
      <Quntity />
      <button
        onClick={() => addHandler(product.id)}
        className='bg-pink-500 text-white rounded-md px-1 py-2'
      >
        в корзину
      </button>
    </div>
  )
}
