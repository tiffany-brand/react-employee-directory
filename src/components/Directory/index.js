import React, { Component } from "react";
import Typography from "@material-ui/core/Typography"
import EmployeeTable from "../EmployeeTable";
import { API } from "../../utils/API";

class Directory extends Component {

    state = {
        employees: []
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


    render() {
        return (
            <div>
                <Typography variant="h2" align="center">Employee Directory</Typography>
                <EmployeeTable employees={this.state.employees} />
            </div>
        )
    }

}

export default Directory;