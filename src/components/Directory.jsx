import Form from './Form'
import EmployeesList from './EmployeesList'
import { useState } from 'react'


export default function Directory({selectOptions, formValues}) {
    const [inputsValues, setInputsValues] = useState(formValues);
    console.log(inputsValues)

    function handleChange(event) {
        if(event.target.id === 'form') {
            event.preventDefault();
            event.target.reset();
            setInputsValues(formValues);
            return;
        }
        const prop = event.target.id;
        const value = event.target.value;

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