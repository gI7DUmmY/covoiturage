import { TiGroup } from 'react-icons/ti'
import { FaRoad } from 'react-icons/fa'
import { FaBurn } from 'react-icons/fa'
import { GiGasPump } from 'react-icons/gi'
import { GiPathDistance } from 'react-icons/gi'

const formInput = ({ id, min, max, value, handleChange, label }) => {
  const icon = id => {
    switch (id) {
      case 'pers':
        return (
          <TiGroup className='inline text-purple-800 h-5 w-auto lg:block lg:m-auto' />
        )

      case 'dist':
        return (
          <GiPathDistance className='inline text-green-700 h-5 w-auto md:block md:m-auto md:mt-1' />
        )

      case 'conso':
        return (
          <FaBurn className='inline align-baseline text-red-600 h-5 w-auto md:mt-2 lg:block lg:m-auto' />
        )

      case 'prix':
        return (
          <GiGasPump className='inline align-baseline text-orange-600 h-5 w-auto' />
        )

      case 'peage':
        return (
          <FaRoad className='inline align-middle text-slate-500 h-5 w-auto md:block md:mx-auto md:mt-2' />
        )

      default:
        break
    }
  }

  return (
    <div className='flex flex-col justify-between w-4/5 py-2 mb-4 text-center bg-white rounded-xl md:w-44 lg:w-48 lg:h-24'>
      <label htmlFor={id} className='font-semibold md:h-12'>
        {label} {icon(id)}
      </label>
      <input
        type='number'
        id={id}
        className='h-8 w-16 mx-auto text-center lg:pl-3'
        min={min}
        max={max}
        value={value}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}

export default formInput
