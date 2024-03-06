import { type FormEvent, useState } from 'react'

import { UseAppDispatch } from '../../redux/hooks.ts'
import { addRecord } from '../../redux/slices/record-slice.ts'
import './styles.css'

const AddNewRecordInput = (): JSX.Element => {
  const [value, setValue] = useState('')
  const [valid, setValid] = useState(false)
  const dispatch = UseAppDispatch()

  const handleInputChange = (event: FormEvent<HTMLInputElement>): void => {
    event.preventDefault()
    setValue(event.currentTarget.value)
    if (value.length <= 4 || value.length >= 35) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const handleAddRecord = (): void => {
    dispatch(addRecord(value))
    setValue('')
    setValid((prev) => !prev)
  }

  return (
    <div className="add-new-rec-container">
      <label className='new-rec-label' htmlFor="newRecord">
        <h3>
                    Add new record
        </h3>
      </label>
      {
        !valid &&
          <h4>
            Record must be at least 4 and not more than 35 characters
          </h4>
      }
      <div className='input-rec-container'>
        <input
          type="text"
          name="newRecord"
          value={value}
          onChange={handleInputChange}
          placeholder="Type here what you want to record"
          className="new-rec-input"
        />
        <button
          className="new-rec-button"
          title="Add Record"
          onClick={handleAddRecord}
          disabled={!valid}
        >
          <h3 className="new-rec-button-text">
                        Add Record
          </h3>
        </button>
      </div>
    </div>
  )
}

export default AddNewRecordInput
