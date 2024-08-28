export default function EmployeeProfil({firstName, lastName, gender, department, emailAdd}) {
    
    return <ol>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Department: {department}</li>
        <li>Email address: {emailAdd}</li>
    </ol>
}