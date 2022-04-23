import { useState, useEffect } from 'react'

import FormInput from './FormInput'

function App() {
  const [formData, setFormData] = useState({
    pers: 1,
    dist: 0,
    conso: 0,
    prix: 0,
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
      setTotal(
        (
          ((formData.dist / 100) * formData.conso * formData.prix) /
          Math.round(formData.pers)
        ).toFixed(2)
      )
  }, [formData])

  return (
    <div className='bg-gradient-to-r from-emerald-300 to-teal-700 h-screen'>
      <h1 className='text-4xl font-bold text-center text-slate-50'>
        Covoiturage
      </h1>
      <form className='mt-10 mx-auto flex flex-col'>
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
      </form>
      <div className='mt-10 text-center bg-slate-50'>
        <h3 className='text-xl font-semibold'>Coût par personne</h3>
        <p className='text-2xl font-bold'>{total} €</p>
      </div>
    </div>
  )
}

export default App
