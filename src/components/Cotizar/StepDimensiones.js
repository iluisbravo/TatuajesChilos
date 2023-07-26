import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Grid, InputLabel, Input, FormHelperText, TextField, InputAdornment, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Styles = styled.div`
    .MuiTypography-colorTextSecondary {
        color: white;
    }
`;

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        backgroundSize: "contain"
    }
})
);

const StepDimensiones = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;

    let img1 = "/assets/Ayuda1.PNG";
    let img2 = "/assets/Ayuda2.PNG";
    let img3 = "/assets/Ayuda3.PNG";

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalAyuda = () => {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={false}
                    maxWidth="xl"
                >
                    <DialogTitle id="alert-dialog-title">{"Ayuda para medir"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} className="text-center">
                                    <img src={img1} alt="ayuda1.img" height="auto" width="250" />
                                </Grid>
                                <Grid item xs={12} md={4} className="text-center">
                                    <img src={img2} alt="ayuda2.img" height="auto" width="250" />
                                </Grid>
                                <Grid item xs={12} md={4} className="text-center">
                                    <img src={img3} alt="ayuda3.img" height="auto" width="250" />
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus>
                            Cerrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }


    React.useEffect(() => {
        setAncho(wizard.ancho);
        setAlto(wizard.alto);

        if (wizard.alto > 0 && wizard.ancho > 0) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, []);


    const classes = useStyles();
    const [alto, setAlto] = React.useState();
    const [ancho, setAncho] = React.useState(0);

    const onChangeInfo = (evt) => {
        let target = evt.target.name;
        let value = evt.target.value;

        if (isNaN(value)) { return }

        switch (target) {
            case "alto":
                wizard.alto = value;
                setWizard(wizard);
                setAlto(value);
                break;
            case "ancho":
                wizard.ancho = value;
                setWizard(wizard);
                setAncho(value);
                break;
            default:
                break;
        }
        
        if (wizard.alto > 0 && wizard.ancho > 0) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }

    //<img width="30%" heigh="30%" src="./assets/ejemplo_tatuaje.png" alt="ejemplo de tatuaje"/>-->
    return (
        <>
            <Styles>
                {modalAyuda()}
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <p>De qué tamaño sería tu tatuaje.</p>
                    </Grid>
                    <Grid item xs={12} md={6} className="text-center">

                        <form>

                            <FormControl>
                                <InputLabel>Alto en centímetros</InputLabel>
                                <Input
                                    name="alto"
                                    id="alto"
                                    value={alto}
                                    onChange={onChangeInfo}
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="standard-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                {/* <FormHelperText id="standard-weight-helper-text">Tamaño en cm.</FormHelperText> */}
                            </FormControl>

                            {/* <TextField
                                id="standard-helperText"
                                label="Alto en centímetros"
                                name="alto"
                                defaultValue={wizard.alto}
                                min={0}
                                max={250}
                                onChange={onChangeInfo}
                                value={wizard.alto}
                            // helperText="Tamaño en cm."
                            /> */}
                            <br />
                            <br />

                            {/* <InputLabel htmlFor="ancho">Ancho</InputLabel>
                                <Input
                                    name="ancho"
                                    aria-describedby="helper-ancho"
                                    type="number"
                                    pattern="[0-9]{0,5}"
                                    min={0}
                                    max={250}
                                    onChange={onChangeInfo}
                                    value={wizard.ancho}
                                />
                                <FormHelperText id="helper-ancho">Tamaño en cm.</FormHelperText> */}

                            {/* <TextField
                                    id="standard-helperText"
                                    name="ancho"
                                    label="Ancho en centímetros"
                                    defaultValue={wizard.ancho}
                                    min={0}
                                    max={250}
                                    onChange={onChangeInfo}
                                    value={wizard.ancho}
                                // helperText="Tamaño en cm."
                                /> */}

                            <FormControl>
                                <InputLabel>Ancho en centímetros</InputLabel>
                                <Input
                                    name="ancho"
                                    id="ancho"
                                    value={ancho}
                                    onChange={onChangeInfo}
                                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                                    aria-describedby="standard-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                {/* <FormHelperText id="standard-weight-helper-text">Tamaño en cm.</FormHelperText> */}
                            </FormControl>


                        </form>
                    </Grid>
                    <Grid item xs={12} md={6} className="text-center">
                        <CardMedia
                            className={classes.media}
                            image="./assets/medidas.jpg"
                            title="Ejemplo de tamaño"
                        />

                        <br />
                        <br />


                        <FormControl>
                            <Button type="button" variant="contained" onClick={handleClickOpen}>
                                ¿Necesitas adyuda para medir?
                            </Button>
                        </FormControl>
                    </Grid>
                </Grid>
                <br />
            </Styles>
        </>
    )
}

export default StepDimensiones;
