import cn from 'classnames'
import React, { FC, useState } from 'react'
import LogoImage from '../assets/images/eth.svg'
import cardIcon from '../assets/images/card.svg'
import { ICartItem } from '../type'

const cartItem: ICartItem[] = [
  {
    imagePath: 'https://items.s1.citilink.ru/1624332_v01_b.jpg',
    name: 'MacBook Pro 14.2", Apple M1 Max',
    count: 1,
    price: 5000,
  },
]

export const Header: FC = () => {
  const [isShowCart, setISSHOWCART] = useState(false)
  const total = cartItem.reduce((acc, item) => {
    return acc + item.count
  }, 0)
  return (
    <div
      className='flex items-center justify-between
    bg-indigo-400 w-full py-2 px-4
     relative '
     style={{
       boxShadow: '1px 3px 30px 0px rgba(0,0,50, 0.75)'
     }}
    >
      <img src={LogoImage} alt='da' width='40' />

      <button
        onClick={() => setISSHOWCART(!isShowCart)}
        className='bg-transparent  '
      >
        <img src={cardIcon} alt='card' width='50' />
      </button>

      <div
        className={cn('absolute top-24 right-0 shadow-md p-5 rounded-md', {
          hidden: !isShowCart,
        })}
        
      >
        {cartItem.map((item) => (
          <div key={item.name} className='flex items-center '>
            <img
              src={item.imagePath}
              alt={item.name}
              width='55'
              height='55'
              className='mr-3'
            />
            <div>{item.name}</div>
            <div className='bg-origin-padding m-5 text-cyan-500 '>{`${item.count} x ${item.price}`}</div>
          </div>
        ))}
        <div className='text-lg'>
          Total: <b>{total}</b>
        </div>
      </div>
    </div>
  )
}
