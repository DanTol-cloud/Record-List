import { FormEvent } from 'react'

import { ETypes } from '../../data.ts'
import './styles.css'

type FilterContainerType = {
  onChange: (event: FormEvent<HTMLSelectElement>) => void
}
const FilterContainer = ({ onChange }: FilterContainerType): JSX.Element => {
  return (
    <form className="filter-container">
      <label htmlFor="types">
        <h3>
                    Filter records by type
        </h3>
      </label>
      <select
        className="select-container"
        id="types"
        name="types"
        onChange={onChange}
      >
        <option value={ETypes.All}>{ETypes.All}</option>
        <option value={ETypes.Completed}>{ETypes.Completed}</option>
        <option value={ETypes.Current}>{ETypes.Current}</option>
      </select>
    </form>
  )
}

export default FilterContainer
