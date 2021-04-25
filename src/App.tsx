import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'center'
    },
    cryptoBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    currencyInput: {
      minWidth: 'calc(70%-10%)',
      marginRight: 10,
    },
    currencyType: {
      minWidth: '30%',
    },
  }),
);

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.cryptoBox}>
              <FormControl fullWidth className={classes.currencyInput}>
                <TextField id="standard-basic" label="Amount" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Currency
                </InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.cryptoBox}>
              <FormControl fullWidth className={classes.currencyInput}>
                <TextField id="standard-basic" label="Amount" />
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Currency
                </InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h5" component="h5">
              2.60 Belarusian ruble
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
