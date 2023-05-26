import { ReactNode, SyntheticEvent, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import RulesCard from './Rules';
import ReferenceCard from './ReferenceCard';
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
import Stack from '@mui/material/Stack';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface Column {
  id: 'name' | 'score';
  label: string;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name'},
  {
    id: 'score',
    label: 'Score',
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

const parseSignedIntString = (intStr: string) => {
  let signedInt = 0;
  if(intStr[0] === '-'){
    signedInt = -Math.abs(parseInt(intStr));
  }
  else {
    signedInt = parseInt(intStr);
  }
  return signedInt;
}

const rows = [
  createData(0, 'Player1', 0),
];


export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [openScore, setOpenScore] = useState(false);
  const [openPlayerAdd, setOpenPlayerAdd] = useState(false);
  const [playerName, setPlayerName] = useState<string>('');
  const [selectedRow, setSelectedRow] = useState<number>(0);
  const [addScore, setAddScore] = useState<string>('');
  const [scoreObj, setScoreObj] = useState(rows);

  const handleClickOpen = (rowId: number) => {
    setSelectedRow(rowId);
    setOpenScore(true);
  };

  const handleAddScore = () => {
    // create copies of current state
    const row = Number(selectedRow);
    let updateScore = JSON.parse(JSON.stringify(scoreObj));
    const newAdd = addScore == ''? 0 : parseSignedIntString(addScore);

    updateScore[row].score = updateScore[row].score + newAdd;
    setScoreObj(updateScore);
    handleCloseScore();
  }

  const handlePlayerName = (e: any) => {
    if(openPlayerAdd){
        setPlayerName(e.target.value);
    }
  }

  const handleTextFieldChange = (e: any) => {
    const regex = /^-?\d*\.?\d+$/;
    if(openScore){
      if(e.target.value.match(regex) || e.target.value[0] === '-'){
        setAddScore(e.target.value);
      }
      else {
        setAddScore('');
      }
    }
  }

  const handleAddPlayer = (e: any) => {
    let updateScoreObj = scoreObj;
    const ind = scoreObj.length;
    updateScoreObj.push(createData(ind, playerName, 0));
    setScoreObj(updateScoreObj);
    handlClosePlayerAdd();
  }

  const handleReset = () => {
    setScoreObj(rows);
    setAddScore('');
    setSelectedRow(0);
  }

  const handleOpenAddPlayer = () => {
    // open modal to enter name
    setOpenPlayerAdd(true);
  }

  const handlClosePlayerAdd = () => {
    setPlayerName('');
    setOpenPlayerAdd(false);
  }

  // close modal and reset values
  const handleCloseScore = () => {
    setOpenScore(false);
    setSelectedRow(0);
    setAddScore('');
  };

  const handleDeletePlayer = () => {
    const row = selectedRow;
    let update = [...scoreObj];
    // delete player from selected row
    update.splice(row, 1)
    // reorder indexes of scoerobj
    for(let i = 0; i < update.length; i += 1){
      update[i].rowId = i;
    }
    // set new scoreObj
    setScoreObj(update);
    // close modal
    handleCloseScore();
  }


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Score" {...a11yProps(0)} />
          <Tab label="Rules" {...a11yProps(1)} />
          <Tab label="Reference" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
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
          { openScore &&
            <Dialog open={openScore} onClose={handleCloseScore}>
              <DialogTitle> add score for: { scoreObj[selectedRow].name }</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Add Score
                </DialogContentText>
                <TextField  value={addScore} onChange={(e) => handleTextFieldChange(e)} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseScore}>Cancel</Button>
                <Button onClick={handleAddScore}>Add</Button>
                <Button onClick={handleDeletePlayer}>Delete</Button>
              </DialogActions>
            </Dialog>
          }
          <div style={{ margin: '1rem'}}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleReset}>
                New Game
              </Button>
              <Button className="button-spacing" variant="contained" onClick={handleOpenAddPlayer}>
                Add Player
              </Button>
            </Stack>
          </div>
          { openPlayerAdd &&
            <Dialog open={openPlayerAdd} onClose={handlClosePlayerAdd}>
              <DialogTitle style={{margin: '1rem'}}> Enter Player Name </DialogTitle>
              <DialogContent>
                <DialogContentText>
                </DialogContentText>
                <TextField value={playerName} onChange={(e) => handlePlayerName(e)} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handlClosePlayerAdd}>Cancel</Button>
                <Button onClick={handleAddPlayer}>Add</Button>
              </DialogActions>
            </Dialog>
          }
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RulesCard/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReferenceCard/>
      </TabPanel>
    </Box>
  );
}
