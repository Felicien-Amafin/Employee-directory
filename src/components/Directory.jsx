import Form from './Form'
import EmployeesList from './EmployeesList'
import { useState } from 'react'
import { initInputsValues } from '../utility/functions';

export default function Directory({selectOptions, initInput}) {
    
    const [inputsValues, setInputsValues] = useState(initInput);
   
    function handleChange(event) {
        if(event.target.id === 'form') {
            event.preventDefault();
            event.target.reset();
            const resetInputs = initInputsValues();
            setInputsValues(resetInputs);
            return;
        }
        const prop = event.target.id;
        const value = event.target.value.trim();

        setInputsValues((inputsValues)=> {
            const newInputsValues = {...inputsValues, [prop]:value};
            return newInputsValues;
        });
    }

    return(
        <section>
            <div>
                <h2>Employee directory</h2>
                <p>Stay in touch with your co-workers</p>
            </div>
            <Form 
                selectOptions={selectOptions} 
                inputsValues={inputsValues}
                handleChange={handleChange}
            />
            <EmployeesList 
                inputsValues={inputsValues}
            />
        </section>
    )
}