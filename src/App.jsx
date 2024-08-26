import './index.css'
import { getSelectOptions } from './utility/functions'
import { employees } from './data/employees';
import Directory from './components/Directory';


function App() {
  //
  const selectOptions = getSelectOptions(employees);
  const initInputsValues = {
    first_name: '', 
    last_name: '', 
    gender: '',
    department: ''
  }

  return (
    <>
      <header>
        <h1>Smith & sons industry</h1>
      </header>
      <Directory 
        selectOptions={selectOptions} 
        formValues={initInputsValues}
      />
    </>
  )
}

export default App
