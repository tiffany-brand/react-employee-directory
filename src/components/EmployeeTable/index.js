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
                        <TableCell><span onClick={() => props.handleSort("firstName", "asc")}>First Name</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort("lastName", "asc")}>Last Name</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort("gender", "asc")}>Gender</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort("email", "asc")}>Email</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort("phone", "asc")}>Phone Number</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort("city", "asc")}>City</span></TableCell>
                        <TableCell><span onClick={() => props.handleSort("state", "asc")}>State</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.employees.map(emp => {
                            return <TableRow key={emp.id}>
                                <TableCell align="left"><img alt={`${emp.firstName} ${emp.lastName}`} src={emp.picture}></img></TableCell>
                                <TableCell align="left">{emp.firstName}</TableCell>
                                <TableCell align="left">{emp.lastName}</TableCell>
                                <TableCell align="left">{emp.gender}</TableCell>
                                <TableCell align="left">{emp.email}</TableCell>
                                <TableCell align="left">{emp.phone}</TableCell>
                                <TableCell align="left">{emp.city}</TableCell>
                                <TableCell align="left">{emp.state}</TableCell>
                            </TableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default EmployeeTable;