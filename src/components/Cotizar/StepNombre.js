import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';

const StepNombre = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;

    const [nombre, setNombre] = React.useState();
    const [apellido, setApellido] = React.useState();
    const [lada, setLada] = React.useState(wizard.ladaCliente);
    const [ladaCode, setLadaCode] = React.useState(wizard.ladaCodeCliente);
    const [whats, setWhats] = React.useState();
    const [email, setEmail] = React.useState();

    React.useEffect(() => {
 
        setNombre(wizard.nombreCliente);
        setApellido(wizard.apellidoCliente);
        setLada(wizard.ladaCliente);
        setLadaCode(wizard.ladaCodeCliente);
        setWhats(wizard.telefonoCliente);
        setEmail(wizard.emailCliente);

        if (wizard.nombreCliente && wizard.apellidoCliente && wizard.ladaCliente && wizard.telefonoCliente && wizard.emailCliente) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, []);

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const onChangeInfo = (evt) => {
        let target = evt.target.name;
        let value = evt.target.value;

        switch (target) {
            case "nombre":
                wizard.nombreCliente = value;
                setWizard(wizard);
                setNombre(value);
                break;
            case "apellido":
                wizard.apellidoCliente = value;
                setWizard(wizard);
                setApellido(value);
                break;
            case "whatsapp":
                if (isNaN(value)) { return }
                wizard.telefonoCliente = value;
                setWizard(wizard);
                setWhats(value);
                break;
            case "email":
                wizard.emailCliente = value;
                setWizard(wizard);
                setEmail(value);
                break;
            default:
                break;
        }

        if (wizard.nombreCliente
            && wizard.apellidoCliente
            && wizard.ladaCliente
            && wizard.telefonoCliente.length === 10
            && validateEmail(wizard.emailCliente)) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    const submitInfo = (evt) => {
        evt.preventDefault();

        let info = {
            nombre,
            apellido,
            lada,
            ladaCode,
            whats,
            email
        };
    }

    const handleChangeLada = (event) => {
        let inputLada = event.target.value;
        let inputLadaCode = "+521";

        switch (inputLada) {
            case "MXN":
                inputLadaCode = "+521";
                break;
            case "USA":
                inputLadaCode = "+1";
                break;
            case "CAN":
                inputLadaCode = "+1";
                break;

            default:
                inputLadaCode = "+521";
                break;
        }

        wizard.ladaCodeCliente = inputLadaCode;
        wizard.ladaCliente = inputLada;
        setWizard(wizard);
        setLada(inputLada);
    };

    return (
        <>

            <form noValidate autoComplete="off" onSubmit={submitInfo}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic"
                            label="Nombre*"
                            name="nombre"
                            onChange={onChangeInfo}
                            value={nombre}
                            inputProps={{ maxLength: 50 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic"
                            label="Apellido*"
                            name="apellido"
                            onChange={onChangeInfo}
                            value={apellido}
                            inputProps={{ maxLength: 50 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <FormControl required fullWidth>
                            <InputLabel id="demo-simple-select-required-label">Lada</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                name="lada"
                                value={lada}
                                onChange={handleChangeLada}
                            >
                                <MenuItem value={`MXN`}> <img className='mx-2' height="15" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/MX.svg" /> México (+52)</MenuItem>
                                <MenuItem value={`USA`}><img className='mx-2' height="15" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg" /> EE.UU. (+1)</MenuItem>
                                <MenuItem value={`CAN`}> <img className='mx-2' height="15" src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/CA.svg" />Canadá (+1)</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TextField fullWidth id="standard-basic"
                            label="WhatsApp*"
                            name="whatsapp"
                            onChange={onChangeInfo}
                            value={whats}
                            inputProps={{ maxLength: 10 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="standard-basic"
                            label="Email*"
                            name="email"
                            onChange={onChangeInfo}
                            value={email}
                            inputProps={{ maxLength: 50 }}
                        />
                    </Grid>
                </Grid>
            </form>
            <br />
        </>
    )
}

export default StepNombre;