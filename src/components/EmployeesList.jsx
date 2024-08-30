import { employees } from '../data/employees'
import EmployeeProfil  from './EmployeeProfil'
import classes from './EmployeesList.module.css'

export default function EmployeesList({inputsValues}) {
    
    function getEmployees(inputsValues) {
        let search = {};
        let result = [];
        
        //Get search criterions and stores them into search
        for(const [key, value] of Object.entries(inputsValues)) {
            if(value !== '') {
                search = {...search, [key]: value};
            }
        }
        
        employees.map((employee)=> {
            let bool = true;
            for(const [key, value] of Object.entries(search)) {
               if(employee[key].toLowerCase() !== value.toLowerCase()) {
                    bool = false;
                    break;
               }
            }
            bool ? result.push(employee) : null;
        })
        
        return [search, result];
    }

    let [search, result] = getEmployees(inputsValues);
    let content = result;

    if(result.length === 0) {
        content = [];
        for(const [key, value] of Object.entries(search)) {
            const newValue = value.charAt(0).toUpperCase() + value.slice(1)
            if(key === 'first_name') { content.push(`First name: ${newValue}`) }
            if(key === 'last_name') { content.push(`Last name: ${newValue}`) }
            if(key === 'gender') { content.push(`Gender: ${newValue}`) }
            if(key === 'department') { content.push(`Department: ${newValue}`) }
            
        }
    }

    return(
        <>
           {result.length === 0 && <div className={classes.list}>
                <p>No result for following search:</p>
                <ul className={classes.error}>
                    {content.map((search, index)=> {
                        return <li key={index}>{search}</li>
                    })}
                </ul>
            </div>
           }  
           {result.length > 0 && <div className={classes.list}>
                {result.length === 100 ? <h3>{`All employees (${result.length})`}</h3>: null}
                <ul className={classes.cardList}>
                    {content.map((employee, index)=> {
                        return <li key= {`${index}-employee`} className={classes.card}>
                            <EmployeeProfil 
                                firstName={employee.first_name} 
                                lastName={employee.last_name} 
                                gender={employee.gender} 
                                department={employee.department} 
                                emailAdd={employee.email_address} 
                            />
                        </li>
                    })}
                </ul>
           </div>}
        </> 
    )
}