import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

function EmployeeTable(props) {

    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="Employee Table">
                {/* Table headings with sort icons and click handlers */}
                <TableHead>
                    <TableRow>
                        <TableCell>Picture</TableCell>
                        <TableCell>First Name
                            <TableSortLabel active={props.orderBy === "firstName"} direction={props.order} onClick={() => props.handleSort("firstName", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell>Last Name
                        <TableSortLabel active={props.orderBy === "lastName"} direction={props.order} onClick={() => props.handleSort("lastName", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell>Gender
                        <TableSortLabel active={props.orderBy === "gender"} direction={props.order} onClick={() => props.handleSort("gender", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell>Email
                        <TableSortLabel active={props.orderBy === "email"} direction={props.order} onClick={() => props.handleSort("email", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell>Phone Number
                        <TableSortLabel active={props.orderBy === "phone"} direction={props.order} onClick={() => props.handleSort("phone", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell>City
                        <TableSortLabel active={props.orderBy === "city"} direction={props.order} onClick={() => props.handleSort("city", props.order)}></TableSortLabel>
                        </TableCell>
                        <TableCell>State
                        <TableSortLabel active={props.orderBy === "state"} direction={props.order} onClick={() => props.handleSort("state", props.order)}></TableSortLabel>
                        </TableCell>
                    </TableRow>
                </TableHead>
                {/* Create table rows from employees array */}
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