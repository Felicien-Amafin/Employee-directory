import classes from './EmployeeProfil.module.css'

export default function EmployeeProfil({firstName, lastName, gender, department, emailAdd}) {
    
    return <ol>
        <li className={classes.name}>{firstName} {lastName}</li>
        <li>Gender: <span>{gender}</span></li>
        <li>Department: <span>{department}</span></li>
        <li>Email address: <span>{emailAdd}</span></li>
    </ol>
}