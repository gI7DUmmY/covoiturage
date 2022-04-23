const formInput = ({ id, min, max, value, handleChange, label }) => {
  return (
    <>
      <div className='flex flex-col justify-between w-4/5 py-2 mb-4 text-center bg-white rounded-xl lg:w-48'>
        <label htmlFor={id} className='font-semibold'>
          {label}
        </label>
        <input
          type='number'
          id={id}
          className='h-8 w-14 mx-auto text-center'
          min={min}
          max={max}
          value={value}
          onChange={e => handleChange(e)}
        />
      </div>
    </>
  )
}

export default formInput
