import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {Grid} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundSize: "contain"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            className={classes.media}
            image="./assets/tc1.PNG"
            title="Ejemplo de tamaño"
          />
        </Grid>
        <Grid item xs={4}>
        <CardMedia
            className={classes.media}
            image="./assets/tc2.PNG"
            title="Ejemplo de tamaño"
          />
        </Grid>
        <Grid item xs={4}>
        <CardMedia
            className={classes.media}
            image="./assets/tc3.PNG"
            title="Ejemplo de tamaño"
          />
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <Button type="button" className={classes.button} onClick={handleOpen}>
        Ayuda para medir
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}