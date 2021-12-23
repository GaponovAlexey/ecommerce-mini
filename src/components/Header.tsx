import cn from 'classnames'
import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cardIcon from '../assets/images/card.svg'
import LogoImage from '../assets/images/eth.svg'
import { removeItem } from '../store/state'
import { RootState } from '../store/store'
import { Quntity } from './Quntity'

export const Header: FC = () => {
  const {basket} = useSelector((state: RootState) => state.count)
  const dispatch = useDispatch()

  const [isShowCart, setISSHOWCART] = useState(false)

  // const total = cartItem.reduce((acc, item) => {
  //   return acc + item.price
  // }, 0)

  const removeHandler = (id: number) => {
    dispatch(removeItem({id}))
  }

  return (
    <div
      className='flex items-center justify-between
    bg-indigo-400 w-full py-2 px-4
     relative '
      style={{
        boxShadow: '1px 3px 30px 0px rgba(0,0,50, 0.75)',
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
        {basket.map((item) => (
          <div key={item.name} className='flex items-center '>
            <img src={item.imagePath} alt={item.name} className='mr-3 h-14' />
            <div>
              <div>{item.name}</div>
              <div className='text-orange-400 '>{`${item.count} x ${item.price}`}</div>
              <Quntity />
              <button
                onClick={() => removeHandler(item.id)}
                className=' text-red-700 bg-origin-padding bg-transparent border-0'
              >
                delete
              </button>
            </div>
          </div>
        ))}
        <div className='text-lg'>{/* Total:$ <b>{total}</b> */}</div>
      </div>
    </div>
  )
}
