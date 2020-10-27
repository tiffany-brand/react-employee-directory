import React, { Component } from "react";
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';
import EmployeeTable from "../EmployeeTable";
import Search from "../Search";
import { API } from "../../utils/API";
import { searchEmp } from "../../utils/searchEmp";
import "./style.css";

class Directory extends Component {

    state = {
        employees: [],
        loadedEmployees: [],
        search: ""
    }


    componentDidMount() {
        API.getEmployees()
            .then(response => {
                console.log(response);
                let empData = response.data.results.map(emp => {
                    return {
                        id: emp.id.value,
                        picture: emp.picture.thumbnail,
                        firstName: emp.name.first,
                        lastName: emp.name.last,
                        gender: emp.gender,
                        email: emp.email,
                        phone: emp.phone,
                        city: emp.location.city,
                        state: emp.location.state
                    }
                })
                this.setState({
                    employees: empData,
                    loadedEmployees: empData
                })
            })
            .catch(err => console.log(err));
    }

    // object sorting function from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
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

    // function to sort table by a given column
    handleSort = (column, order) => {
        console.log(this.state.employees);
        let sorted = [...this.state.employees].sort(this.compareValues(column, order));
        this.setState({ employees: sorted });
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        }, () => {
            if (this.state.search) {
                let filteredEmps = searchEmp.searchEmp(this.state.search, this.state.loadedEmployees);
                this.setState({
                    employees: filteredEmps
                })
            } else {
                this.setState({
                    employees: this.state.loadedEmployees
                })
            }
        });
    };



    render() {
        return (
            <div>
                <Typography variant="h2" align="center">Employee Directory</Typography>
                <Grid className="Directory-search" container justify="center">
                    <Search display="flex" alignItems="center" employees={this.state.employees} handleInputChange={this.handleInputChange} />
                </Grid>
                <EmployeeTable employees={this.state.employees} handleSort={this.handleSort} />
            </div>
        )
    }

}

export default Directory;