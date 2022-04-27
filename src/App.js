import { useState, useEffect } from 'react'

import FormInput from './FormInput'

function App() {
  const [formData, setFormData] = useState({
    pers: 1,
    dist: 0,
    conso: 0,
    prix: 0,
    peage: 0,
  })
  const [total, setTotal] = useState(0)

  const handleChange = e => {
    const key = e.target.id
    const value = e.target.value

    setFormData(prevState => ({ ...prevState, [key]: value }))
  }

  useEffect(() => {
    formData.pers > 0 &&
      formData.dist >= 0 &&
      formData.conso >= 0 &&
      formData.prix >= 0 &&
      formData.peage >= 0 &&
      setTotal(
        (
          (formData.dist * (formData.conso / 100) * formData.prix +
            formData.peage) /
          Math.round(formData.pers)
        ).toFixed(2)
      )
  }, [formData])

  return (
    <div className='bg-gradient-to-r from-emerald-300 to-teal-700 h-screen'>
      <h1 className='pt-10 text-4xl font-bold text-center text-slate-50'>
        Covoiturage
      </h1>
      <form className='mt-10 flex flex-col items-center md:flex-row md:justify-center md:gap-x-4 md:px-2'>
        <FormInput
          id={'pers'}
          min={1}
          max={5}
          value={formData.pers}
          handleChange={handleChange}
          label={'Combien de personnes'}
        />

        <FormInput
          id={'dist'}
          min={0}
          value={formData.dist}
          handleChange={handleChange}
          label={'Distance en Km'}
        />

        <FormInput
          id={'conso'}
          min={0}
          value={formData.conso}
          handleChange={handleChange}
          label={'Conso en L/100Km'}
        />

        <FormInput
          id={'prix'}
          min={0}
          value={formData.prix}
          handleChange={handleChange}
          label={"Coût de l'essence en €/L"}
        />

        <FormInput
          id={'peage'}
          min={0}
          value={formData.peage}
          handleChange={handleChange}
          label={'Péage en €'}
        />
      </form>
      <div className='mt-10 py-1 text-center bg-slate-50'>
        <h3 className='text-xl font-semibold'>Coût par personne</h3>
        <p className='text-2xl font-bold'>{total} €</p>
      </div>
    </div>
  )
}

export default App
