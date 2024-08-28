export default function Form({selectOptions, inputsValues, handleChange}) {
    
    return(
        <form id="form" onSubmit={handleChange}>
            <input 
                id="first_name" 
                type="text" 
                placeholder="First name" 
                value={inputsValues.first_name}
                onChange={handleChange}
            />
            <input 
                id="last_name" 
                type="text"  
                placeholder="Last name" 
                value={inputsValues.last_name}
                onChange={handleChange}
            />
            <select id="gender" value={inputsValues.gender} onChange={handleChange}>
                <option value="">Select a gender</option>
                {selectOptions.gender.map((opt, index) => {
                    return <option 
                                key={`${opt}-${index}`}
                                value={opt}
                            >
                                {opt}
                            </option>
                })}
            </select>
            <select id="department" value={inputsValues.department} onChange={handleChange}>
                <option value="">Select a departement</option>
                {selectOptions.department.map((opt, index) => {
                    return <option 
                                key={`${opt}-${index}`}
                                value={opt}
                            >
                                {opt}
                            </option>
                })}
            </select>
            <button type="submit">reset</button>
        </form>
    )
}