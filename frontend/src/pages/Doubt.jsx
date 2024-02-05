import React from 'react'
import { useParams } from 'react-router-dom'

const Doubt = () => {
    const { id } = useParams()
    console.log(id);
  return (
    <div>Doubt</div>
  )
}

export default Doubt