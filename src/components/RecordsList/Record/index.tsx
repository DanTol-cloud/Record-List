import './styles.css'

interface RecordProps {
  id: number
  isDone: boolean
  title: string
  onClick: (id: number) => void
}

const Record = ({
  id,
  isDone,
  title,
  onClick,
}: RecordProps): JSX.Element => {
  const brdColor = isDone ? {
    'borderTopColor': '#339933',
  } : {
    'borderTopColor': '#cc0000',
  }

  const txtColor = isDone ? {
    'color': '#00cc00',
  } : {
    'color': '#ff0000',
  }

  return <li
    className="record-item"
    style={brdColor}
    onClick={() => {
      onClick(id)
    }}
  >
    <h3
      style={txtColor}>{title}</h3>
  </li>
}

export default Record
