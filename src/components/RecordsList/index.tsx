import { FormEvent, useState } from 'react'

import Record from './Record'
import { ETypes, RecordsType } from '../../data.ts'
import { UseAppDispatch, UseAppSelector } from '../../redux/hooks.ts'
import { toggleIsDone } from '../../redux/slices/record-slice.ts'
import FilterContainer from '../FilterContainer'
import './styles.css'

const RecordsList = (): JSX.Element => {
  const [filterType, setFilterType] = useState('All')
  const records = UseAppSelector((state) => state.records)
  const dispatch = UseAppDispatch()

  const toggleRecordStatus = (id: number): void => {
    dispatch(toggleIsDone(id))
  }

  const filterRecords = (type: string): RecordsType[] => {
    switch (type) {
      case ETypes.Completed: {
        return records.filter((rec) => rec.isDone === true)
      }
      case ETypes.Current: {
        return records.filter((rec) => rec.isDone === false)
      }
      default: {
        return records
      }
    }
  }

  const handleTypeChange = (event: FormEvent<HTMLSelectElement>): void => {
    setFilterType(event.currentTarget.value)
  }

  return (
    <>
      <FilterContainer onChange={handleTypeChange} />
      <ul className='records-list'>
        {filterRecords(filterType).map((rec) => <Record
          key={rec.id}
          {...rec}
          onClick={toggleRecordStatus}
        />)}
      </ul>
    </>
  )
}

export default RecordsList
