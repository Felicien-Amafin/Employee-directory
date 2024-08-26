export function getSelectOptions(employees) {
    //Stores options for select tag in "selectOptions" obj.
    const optionNames = ['gender', 'department'];
    let selectOptions = {};

    optionNames.map((option) => {
        let array = [];
        employees.map((employee) => {
            array.length === 0 ? array.push(employee[option]) : null;
            if(array.length > 0) {
                !array.includes(employee[option]) ? array.push(employee[option]) : null;
            }
        })
        array = array.sort();
        selectOptions = {...selectOptions, [option]: array};
    })
    return selectOptions
}
