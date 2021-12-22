import React, { FC, useState } from 'react'
import { IProduct } from '../../type'
import { ProductItem } from './ProductItem'

export const Products: FC = () => {
  const [products, setPRODUCTS] = useState<IProduct[]>([
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
  ])

  return (
    <div className='m-6'>
      {products.map((el) => (
        <ProductItem key={el.id} product={el} />
      ))}
    </div>
  )
}
