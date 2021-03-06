import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/state'
import { IProduct } from '../../type'

interface IPporoductItem {
  product: IProduct
}

export const ProductItem: FC<IPporoductItem> = ({ product }) => {
  const dispatch = useDispatch()
  const addHandler = (id: number) => {
    dispatch(addItem(product))
  }

  return (
    <div className='shadow-sm rounded-md flex p-5 w-4/5 mx-auto mt-7 bg-white justify-center flex-col center text-center items-center '>
      <img className='h-24 ' src={product.imagePath} alt={product.name} />
      <div className='text-lg font-bold'>{product.name}</div>
      <div className='text-sm text-gray-600'>{product.price}p</div>
      <button
        onClick={() => addHandler(product.id)}
        className='bg-pink-500 text-white rounded-md px-1 py-2'
      >
        в корзину
      </button>
    </div>
  )
}
