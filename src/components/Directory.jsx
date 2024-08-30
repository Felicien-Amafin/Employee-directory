import Title from './Title';
import Form from './Form'
import EmployeesList from './EmployeesList'
import { useState } from 'react'
import { initInputsValues } from '../utility/functions';

export default function Directory({className, selectOptions, initInput}) {
    
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
        <section className={className}>
            <div className='search'>
                <Title
                    title="Employees' directory"
                    para="Stay in touch with your co-workers"
                />
                <Form 
                    selectOptions={selectOptions} 
                    inputsValues={inputsValues}
                    handleChange={handleChange}
                />
            </div>
            <EmployeesList 
                inputsValues={inputsValues}
            />
        </section>
    )
}