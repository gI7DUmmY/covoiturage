import { useState, useEffect } from 'react'

function App() {
  const [formData, setFormData] = useState({
    pers: 1,
    dist: 0,
    conso: 0,
    prix: 0,
  })
  const [total, setTotal] = useState(0)

  const handleChangePers = value => {
    setFormData({ ...formData, pers: value })
  }

  const handleChangeDist = value => {
    setFormData({ ...formData, dist: value })
  }

  const handleChangePrix = value => {
    setFormData({ ...formData, prix: value })
  }

  const handleChangeConso = value => {
    setFormData({ ...formData, conso: value })
  }

  useEffect(() => {
    console.log(formData)
    setTotal(
      (
        ((formData.dist / 100) * formData.conso * formData.prix) /
        formData.pers
      ).toFixed(2)
    )
  }, [formData])

  return (
    <>
      <h1 className='text-4xl font-bold text-center'>Covoiturage</h1>
      <form className='mt-10 mx-3 flex justify-between'>
        <label htmlFor='pers'>Combien de personnes</label>
        <input
          type='number'
          id='pers'
          className='w-10'
          min='1'
          max='5'
          value={formData.pers}
          onChange={e => handleChangePers(e.target.value)}
        />
        <label htmlFor='dist'>Distance en Km</label>
        <input
          type='number'
          id='dist'
          min='0'
          value={formData.dist}
          onChange={e => handleChangeDist(e.target.value)}
        />
        <label htmlFor='conso'>Conso en L/100Km</label>
        <input
          type='number'
          id='conso'
          min='0'
          value={formData.conso}
          onChange={e => handleChangeConso(e.target.value)}
        />
        <label htmlFor='prix'>Coût de l'essence en €</label>
        <input
          type='number'
          id='prix'
          min='0'
          value={formData.prix}
          onChange={e => handleChangePrix(e.target.value)}
        />
      </form>
      <div className='mt-10 text-center'>
        <h3 className='text-xl'>Coût par personne</h3>
        <p className='text-2xl font-bold'>{total} €</p>
      </div>
    </>
  )
}

export default App
