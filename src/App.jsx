import './index.css'
import { getSelectOptions, initInputsValues } from './utility/functions'
import { employees } from './data/employees';
import Directory from './components/Directory';


function App() {
  const selectOptions = getSelectOptions(employees);
  return (
    <>
      <header>
        <h1>Smith & sons industry</h1>
      </header>
      <Directory 
        selectOptions={selectOptions} 
        initInput={initInputsValues()}
      />
    </>
  )
}

export default App
