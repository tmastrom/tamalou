import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface Column {
  id: 'name' | 'score';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'score',
    label: 'Score',
    minWidth: 170,
    align: 'right',
  },
];

interface Data {
  rowId: number;
  name: string;
  score: number;
}

function createData(
  rowId: number,
  name: string,
  score: number,
): Data {
  return { rowId, name, score };
}

const rows = [
  createData(0, 'Player1', -10),
  createData(1, 'Player2', 14),
  createData(2, 'Player3', 26),
];


export default function StickyHeadTable() {
  const [open, setOpen] = React.useState(false);
  const [selectedRow, setSelectedRow] = React.useState(-1);
  const [add, setAdd] = React.useState(0);
  const [scoreObj, setScoreObj] = React.useState(rows);  // | create default value for empty table

  const handleClickOpen = (rowId: number) => {
    console.log(rowId);
    setSelectedRow(rowId);
    setOpen(true);
  };

  // close modal and reset values
  const handleClose = () => {
    setOpen(false);
    setAdd(0);
    setSelectedRow(-1);
  };

  const handleAddScore = () => {
    // create intermediate state variable for modifying
    let updateScore = scoreObj;
    updateScore[selectedRow].score = Number(updateScore[selectedRow].score) + Number(add);
    // set the updated score 
    setScoreObj(updateScore);
    // close the modal
    handleClose();
  }

  const handleTextFieldChange = (e: any) => {
    console.log(e.target.value);
    setAdd(e.target.value);
  }
  
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {scoreObj.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} onClick={() => handleClickOpen(row.rowId)} key={row.rowId}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer> 

      { open && 
        <Dialog open={open} onClose={handleAddScore}>
          <DialogTitle> add score for player { selectedRow }</DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            <TextField  value={add} onChange={(e) => handleTextFieldChange(e)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddScore}>Add</Button>
          </DialogActions>
        </Dialog>
      }
    </Paper>
  );
}
