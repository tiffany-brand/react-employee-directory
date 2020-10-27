const searchEmp = {
    searchEmp: (value, empArr) => {
        let filteredEmps = empArr.filter((emp) => {
            return emp.firstName.toLowerCase().includes(value.toLowerCase()) ||
                emp.lastName.toLowerCase().includes(value.toLowerCase()) ||
                emp.email.toLowerCase().includes(value.toLowerCase()) ||
                emp.phone.toLowerCase().includes(value.toLowerCase()) ||
                emp.city.toLowerCase().includes(value.toLowerCase()) ||
                emp.state.toLowerCase().includes(value.toLowerCase())
        })
        return filteredEmps;
    }
}

export { searchEmp }