import './index.css'
import { getSelectOptions, initInputsValues } from './utility/functions'
import { employees } from './data/employees';
import Directory from './components/Directory';


function App() {
  const selectOptions = getSelectOptions(employees);
  return (
    <>
      <header>
        <div className='flex-center'>
          <h1>Smith & sons industry</h1>
          <p>Infrastructure and buildings</p>
        </div>
      </header>
      <Directory 
        className="directory"
        selectOptions={selectOptions} 
        initInput={initInputsValues()}
      />
    </>
  )
}

export default App
