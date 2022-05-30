
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletUser } from '../actions/deletUser';

import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';




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




const ListData = ({ user }) => {
    // console.log(user);
    const dispatch = useDispatch()

    const deletData = (id) => {
        if (window.confirm("Are You Sure Want To Delet This Record")) {

            dispatch(deletUser(id))
        }
    }

    return (
        <>
            
            <br /><br /><br /><br /><br />

            <div style={{ textAlign: "end", padding: "20px" }}>
                <Link to="/add" style={{textDecoration:"none"}}>
                    <Button variant="contained" color="warning" endIcon={<PersonAddAltIcon />}>
                        Add User
                    </Button>
                </Link>
            </div>



            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((user, i) => {

                            return (
                                <StyledTableRow key={i}>
                                    <StyledTableCell component="th" scope="row">{user.name}</StyledTableCell>
                                    <StyledTableCell align="right">{user.email}</StyledTableCell>
                                    <StyledTableCell align="right">{user.phone}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Link to="/edit" state={user}>
                                            <EditIcon style={{ color: "black" }} />
                                        </Link>
                                        <DeleteIcon onClick={(e) => deletData(user.id)} />
                                    </StyledTableCell>

                                </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}
export default ListData