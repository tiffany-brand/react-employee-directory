import React, { Component } from "react";
import Typography from "@material-ui/core/Typography"
import Grid from '@material-ui/core/Grid';
import Header from "../Header";
import EmployeeTable from "../EmployeeTable";
import Search from "../Search";
import { API } from "../../utils/API";
import { util } from "../../utils/utils";
import "./style.css";

class Directory extends Component {

    state = {
        employees: [],
        loadedEmployees: [],
        search: "",
        orderBy: "",
        order: "asc"
    }

    // Get employees from API and store required fields in employees state
    componentDidMount() {
        API.getEmployees()
            .then(response => {
                console.log(response);
                let empData = response.data.results.map(emp => {
                    return {
                        id: emp.id.value,
                        picture: emp.picture.medium,
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



    // function to sort table by a given column
    handleSort = (column, order) => {
        console.log(this.state.employees);
        let sorted = [...this.state.employees].sort(util.compareValues(column, order));
        let newOrder = order === "asc" ? "desc" : "asc"
        this.setState({
            employees: sorted,
            orderBy: column,
            order: newOrder
        });
    }

    // handle search input - filter table when user inputs characters into search
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        }, () => {
            // filter the employee list
            if (this.state.search) {
                let filteredEmps = util.searchEmp(this.state.search, this.state.loadedEmployees);
                this.setState({
                    employees: filteredEmps,
                    orderBy: ""
                })
            } else {
                this.setState({
                    employees: this.state.loadedEmployees,
                    orderBy: ""
                })
            }
        });
    };

    render() {
        return (
            <div className="Directory-container">
                <Header />
                <Grid className="Directory-search" container justify="center">
                    <Search display="flex" alignItems="center" employees={this.state.employees} handleInputChange={this.handleInputChange} />
                </Grid>
                <EmployeeTable employees={this.state.employees} handleSort={this.handleSort} orderBy={this.state.orderBy} order={this.state.order} />
            </div>
        )
    }

}

export default Directory;