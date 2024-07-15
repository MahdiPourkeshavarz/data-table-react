
import './App.css'
import { Table } from './components/table/FilterableTable'
import users from './data/users'

function App() {

  return (
    <>
      <Table people={users}/>
    </>
  )
}

export default App
