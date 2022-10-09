import { useState } from 'react';
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
  createData(0, 'Player1', 0),
  createData(1, 'Player2', 0),
  createData(2, 'Player3', 0),
];

const parseSignedIntString = (intStr: string) => {
  let signedInt = 0;
  if(intStr[0] === '-'){
    console.log('is negative')
    signedInt = -Math.abs(parseInt(intStr));
  }
  else {
    signedInt = parseInt(intStr);
  }
  return signedInt;
}

export default function ScoreTalbe() {
  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number>(0);
  const [add, setAdd] = useState<string>('');
  const [scoreObj, setScoreObj] = useState(rows); 

  const handleClickOpen = (rowId: number) => {
    setSelectedRow(rowId);
    setOpen(true);
  };

  const handleAddScore = () => {
    console.log('add score');
    // create copies of current state
    const row = Number(selectedRow);
    let updateScore = JSON.parse(JSON.stringify(scoreObj));
    
    // check if values are NaN
    const newAdd = parseSignedIntString(add);

    updateScore[row].score = updateScore[row].score + newAdd;
    setScoreObj(updateScore);
    handleClose();
  }

  const handleTextFieldChange = (e: any) => {
    const regex = /^-?\d*\.?\d+$/;
    console.log(e.target.value)
    if(open){
      if(e.target.value.match(regex) || e.target.value[0] === '-'){
        console.log('regex matched');
        setAdd(e.target.value);
      }
      else {
        setAdd('');
      }
    }
  }

  const handleReset = () => {
    console.log('reset');
    setScoreObj(rows);
    setAdd('');
    setSelectedRow(0);
  }

  // close modal and reset values
  const handleClose = () => {
    console.log('handle close');
    setOpen(false);
    setSelectedRow(0);
    setAdd('');
  };
  
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
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle> add score for: { scoreObj[selectedRow].name }</DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            <TextField  value={add} onChange={(e) => handleTextFieldChange(e)} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddScore}>Add</Button>
          </DialogActions>
        </Dialog>
      }
      <Button variant="contained" onClick={handleReset}>
        New Game
      </Button>
    </Paper>
  );
}
