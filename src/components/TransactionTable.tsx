import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    object: string,
    price: number,
    buyer: string,
    date: any,
    status: string,
) {
    return { object, price, buyer, date, status };
}

const rows = [
    createData('Frozen yoghurt', 159, 'Greta Hansson', 24, 'Pending'),
    createData('Ice cream sandwich', 237, 'Hans Andersson', 37, 'Avslutad'),
    createData('Eclair', 262, 'Michael Wolfie', 24, 'Avslutad'),
    createData('Cupcake', 305, 'Jonas Karlsson', 67, 'Avslutad'),
    createData('Gingerbread', 356, 'Juan Hernandez', 49, 'Avslutad'),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Objekt</StyledTableCell>
                        <StyledTableCell align="right">Pris</StyledTableCell>
                        <StyledTableCell align="right">Köpare/Säljare</StyledTableCell>
                        <StyledTableCell align="right">Datum</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.object}>
                            <StyledTableCell component="th" scope="row">
                                {row.object}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.buyer}</StyledTableCell>
                            <StyledTableCell align="right">{row.date}</StyledTableCell>
                            <StyledTableCell align="right">{row.status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
