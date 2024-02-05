import React from 'react'
import TableRow from './TableRow'

const TrainingTable = () => {
  const trainings = [1, 2, 3, 4]

  return (
    <table className=' flex flex-col gap-1 mt-3'>
     {
      trainings.map((training, index)=> <TableRow  key={index} />)
     }
    </table>

  )
}

export default TrainingTable