import React, { Component } from "react";
import Typography from "@material-ui/core/Typography"
import EmployeeTable from "../EmployeeTable";
import { API } from "../../utils/API";

class Directory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.handleSort = this.handleSort.bind(this);
    }



    componentDidMount() {
        API.getEmployees()
            .then(response => {
                console.log(response);
                this.setState({
                    employees: response.data.results
                })

            })
            .catch(err => console.log(err));
    }

    compareValues(key, order = 'asc') {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }

    handleSort(column, order) {
        console.log(this.state.employees);
        let sorted = [...this.state.employees].sort(this.compareValues(column, order));
        this.setState({ employees: sorted });
    }


    render() {
        return (
            <div>
                <Typography variant="h2" align="center">Employee Directory</Typography>
                <EmployeeTable employees={this.state.employees} handleSort={this.handleSort} />
            </div>
        )
    }

}

export default Directory;