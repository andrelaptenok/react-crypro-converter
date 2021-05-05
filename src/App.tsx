import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { CryptoTable} from './components'
import {TCoin} from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'center',
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
    table: {
      minWidth: 650,
    },
    currencyIcon: {
      width: 20,
      height: 20,
      borderRadius: 30,
    },
  }),
);


function App() {
  const classes = useStyles();

  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  React.useEffect(() => {
    axios
      .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(3),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        setAllCoins(coins);
      });
  }, []);

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CryptoTable items={allCoins}  classes={classes}/>
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
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
