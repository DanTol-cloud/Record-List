import AddNewRecordInput from './components/AddNewRecordInput'
import CounterContainer from './components/CounterContainer'
import RecordsList from './components/RecordsList'
import './styles.css'

const App = (): JSX.Element => <>
  <h1>Records List</h1>
  <CounterContainer />
  <AddNewRecordInput />
  <RecordsList />
</>

export default App
