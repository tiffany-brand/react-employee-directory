import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





function EmployeeTable(props) {

    // props.handleSort("email", "asc");
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="Employee Table">
                <TableHead>
                    <TableRow>
                        <TableCell>Picture</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell><span onClick={() => props.handleSort("[name][last]", "asc")}>Last Name</span></TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell><span onClick={() => props.handleSort("email", "asc")}>Email</span></TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.employees.map(emp => {
                            return <TableRow key={emp.id.value}>
                                <TableCell align="left"><img alt={`${emp.name.first} ${emp.name.last}`} src={emp.picture.thumbnail}></img></TableCell>
                                <TableCell align="left">{emp.name.first}</TableCell>
                                <TableCell align="left">{emp.name.last}</TableCell>
                                <TableCell align="left">{emp.gender}</TableCell>
                                <TableCell align="left">{emp.email}</TableCell>
                                <TableCell align="left">{emp.phone}</TableCell>
                                <TableCell align="left">{emp.location.city}</TableCell>
                                <TableCell align="left">{emp.location.state}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeeTable;