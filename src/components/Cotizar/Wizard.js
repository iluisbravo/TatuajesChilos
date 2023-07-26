import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import StepMayor from './StepMayor';
import StepNombre from './StepNombre';
import StepUbicacionEspecifica from './StepUbicacionEspecifica';
import StepUbicacion from './StepUbicacion';
import StepDimensiones from './StepDimensiones';
import StepColorPiel from './StepColorPiel';
import StepColorTatuaje from './StepColorTatuaje';
import StepReferencia from './StepReferencia';
import StepComentarios from './StepComentarios';
import Contacts from '../../providers/contact';
import DealsService from '../../providers/deals';
import { Link } from 'react-scroll';

import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import styled from 'styled-components';
import Deal from '../../providers/deals';

const Styles = styled.div`
    .MuiPaper-root{
      background-color: transparent;
      color: white
    }

    .MuiRadio-colorPrimary.Mui-checked{
        color:#CE7344 !important;
    }

    .MuiRadio-colorSecondary.Mui-checked,
    .MuiStepIcon-root.MuiStepIcon-completed,
    .MuiStepIcon-root.MuiStepIcon-active{
        color:#CE7344 !important;
    }

    .MuiButton-root{
      font-weight:900;
    }

    .MuiButton-containedPrimary{
      background-color: #E9CC64 !important;
      color:white;
    }

    .MuiButton-containedPrimary:hover{
      background-color: #B4AE82 !important;     
    }

    .MuiStepLabel-label,
    .MuiStepLabel-label.MuiStepLabel-completed,
    .MuiStepLabel-label.MuiStepLabel-active,
    .MuiFormHelperText-root,
    .MuiFormLabel-root,
    .MuiInputBase-root,   
    .MuiFormLabel-root.Mui-focused{
      color: white;
      font-size: 16px;
    }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    'Mayor de edad',
    'Ubicación del tatuaje',
    'Dimensiones del tatuaje',
    'Imagén de referencia',
    'Color de la piel',
    'Color del tatuaje',
    'Comentarios',
    'Nombre'
  ];
}


const VerticalLinearStepper = (props) => {
  const setShowCotizador = props.setShowCotizador;

  let cactus = "/assets/cactus_blanco.png";

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const steps = getSteps();

  const [cotizando, setCotizando] = React.useState(false);

  const [wizardData, setWizardData] = React.useState(
    {
      mayorEdad: false,
      ubicacionParteTatuaje: "",
      ubicacionSubParteTatuaje: "",
      ubicacionTatuaje: "",
      alto: 0,
      ancho: 0,
      foto1: null,
      foto2: null,
      foto3: null,
      img1: null,
      img2: null,
      img3: null,
      imgDefault: cactus,
      colorPiel: "",
      colorTatuaje: "",
      comentarios: "",
      nombreCliente: "",
      apellidoCliente: "",
      ladaCliente: "MXN",
      ladaCodeCliente: "+521",
      telefonoCliente: "",
      emailCliente: ""
    }
  );

  const [open, setOpen] = React.useState(false);
  const [messageAlert, setMessageAlert] = React.useState("");

  const closeCotizador = () => {
    resetWizard();
    setShowCotizador(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showAlertModal = (message) => {
    setMessageAlert(message);
    setOpen(true);
  }

  const alertModal = () => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {messageAlert}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  const newDeal = async () => {

    const existEmail = await Contacts.GetByEmail(wizardData.emailCliente);
    const ladaTelefono = wizardData.ladaCodeCliente + wizardData.telefonoCliente;
    const existPhone = await Contacts.GetByPhone(ladaTelefono);
    const resultPromise = { hasError: false, message: "" };
    var contactData = {};
    if (existEmail.data.total > 0 || existPhone.data.total > 0) {
      //Existe
      const contact = existEmail.data.results[0] || existPhone.data.results[0];
      contactData.id = contact.id;
      contactData.firstname = wizardData.nombreCliente;
      contactData.lastname = wizardData.apellidoCliente;
    }
    else {
      const contactResult = await Contacts.New({
        confirmacion_de_edad: wizardData.mayorEdad,
        email: wizardData.emailCliente,
        phone: ladaTelefono,
        firstname: wizardData.nombreCliente,
        lastname: wizardData.apellidoCliente
      });

      if (contactResult.isOk) {
        contactData.id = contactResult.data.id;
        contactData.firstname = wizardData.nombreCliente;
        contactData.lastname = wizardData.apellidoCliente;
      } else {
        //Mensaje de error en el alta del contacto
        // showAlertModal("Ups... al parecer algo salió mal, intentalo de nuevo.");
        console.log(JSON.stringify(contactResult));
        resultPromise.hasError = true;
        return resultPromise;
      }
    }
    const today = new Date();
    const dealResult = await DealsService.New(contactData.id,
      {
        nombre: contactData.firstname,
        apellido: contactData.lastname,
        dealname: `${contactData.firstname} ${contactData.lastname} ${Math.floor(today)}`,
        parte_del_cuerpo_a_tatuar: wizardData.ubicacionTatuaje,
        alto_del_tatuaje: Number(wizardData.alto),
        ancho_del_tatuaje: Number(wizardData.ancho),
        color_de_tatuaje: wizardData.colorTatuaje,
        comentarios_adicionales: wizardData.comentarios,
        color_de_piel: wizardData.colorPiel,
        foto1: wizardData.foto1,
        foto2: wizardData.foto2,
        foto3: wizardData.foto3
      });

    if (dealResult.isOk) {
      return resultPromise;
    } else {
      //Mostramos error en el deal
      //ups
      // showAlertModal("Ups... al parecer algo salió mal, intentalo de nuevo.");
      console.log(JSON.stringify(dealResult));
      resultPromise.hasError = true;
      return resultPromise;
    }
  }

  const handleNext = async () => {
    console.log(activeStep)
    setDisabled(true);
    switch (activeStep) {
      case 0:
        let data = wizardData;
        data.mayorEdad = true;
        setWizardData(data);
        break;
      case 1:
        // setWizardData(data);
        break;
      case 7:
        //Buscar
        console.log(wizardData)
        setCotizando(true);

        newDeal()
          .then(res => {
            setDisabled(false);
            setCotizando(false);
           
            if (!res.hasError) {
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
            else {
              //mostrar error
              showAlertModal("Ups... al parecer algo salió mal, intentalo de nuevo.");
            }

          }).catch(err => {
            //mostrar error
            setDisabled(false);
            setCotizando(false);
            showAlertModal("Ups... al parecer algo salió mal, intentalo de nuevo.");
            console.log(err);
          });

        break;


      default:
        break;
    }

    if (activeStep < 7)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) {
      closeCotizador();
    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    resetWizard();
  };

  const resetWizard = () => {
    setActiveStep(0);
    setWizardData({
      mayorEdad: false,
      ubicacionParteTatuaje: "",
      ubicacionSubParteTatuaje: "",
      ubicacionTatuaje: "",
      alto: 0,
      ancho: 0,
      foto1: null,
      foto2: null,
      foto3: null,
      img1: null,
      img2: null,
      img3: null,
      imgDefault: cactus,
      colorPiel: "",
      colorTatuaje: "",
      comentarios: "",
      nombreCliente: "",
      apellidoCliente: "",
      ladaCliente: "MXN",
      ladaCodeCliente: "52",
      telefonoCliente: "",
      emailCliente: ""
    });
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <div id="0" name="0"><StepMayor wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      case 1:
        return <div id="1" name="1"><StepUbicacion wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      case 2:
        return <div id="2" name="2"><StepDimensiones wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      case 3:
        return <div id="3" name="3"><StepReferencia wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      case 4:
        return <div id="4" name="4"><StepColorPiel wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      case 5:
        return <div id="5" name="5"><StepColorTatuaje wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      case 6:
        return <div id="6" name="6"><StepComentarios wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      case 7:
        return <div id="7" name="7"><StepNombre wizard={wizardData} setWizard={setWizardData} setDisabledFunc={setDisabled} /></div>;
      default:
        return 'Unknown step';
    }
  }

  return (
    <>
      <Styles>
        {alertModal()}
        <div id="WizardInit" name="WizardInit" className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Link to={activeStep === 0 ? "Cotizar" : (activeStep)} smooth={true} duration={100} offset={activeStep === 0 ? -75 : -175}>
                        <Button
                          // disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.button}
                          variant="contained"
                        >
                          Atras
                        </Button>
                      </Link>

                      <Link
                        to={activeStep === steps.length - 1 ? "finishStep" : activeStep}
                        smooth={true}
                        duration={100}
                        offset={activeStep === steps.length - 1 ? -275 : -75}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          className={classes.button}
                          disabled={disabled || cotizando}
                        >
                          {activeStep === steps.length - 1 ? cotizando ? "Enviando cotización  " : 'Enviar' : 'Aceptar'}
                          {cotizando && <CircularProgress size={19} className="mx-2" />}
                        </Button>
                      </Link>

                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <div id="finishStep" name="finishStep">
            {activeStep === steps.length && (
              <Paper square elevation={0} className={classes.resetContainer}>
                <div>
                  <p>
                    <b>¡Listo, {wizardData.nombreCliente}! 🙂</b>
                    <br />
                    <br />
                    Hemos recibido tus datos, esto sucederá ahora:<br />
                    <br />
                    1. Te mandaremos tu cotización por WhatsApp o Email.<br />
                    2. Si tienes preguntas de tu cotización las podrás hacer cuando recibas nuestro mensaje.<br />
                    3. Cuando estés listo, deberás pagar el anticipo especificado en la cotización.<br />
                    4. Deberás enviarnos el comprobante de pago del anticipo.<br />
                    5. Te enviaremos nuestro calendario para que reserves tu cita.<br />
                    6. Te esperamos con mucho gusto de poder atenderte.<br />
                  </p>
                </div>

                <br />
                <Link to="Cotizar" smooth={true} duration={100} offset={-75}>
                  <Button onClick={handleReset} className={classes.button} variant="contained" color="primary">Solicitar otra cotización</Button>
                </Link>
                <Link to="Cotizar" smooth={true} duration={100} offset={-75}>
                  <Button onClick={closeCotizador} className={classes.button} variant="contained">Cerrar</Button>
                </Link>
              </Paper>
            )}
          </div>

        </div>
      </Styles>
    </>
  );
}

export default VerticalLinearStepper;