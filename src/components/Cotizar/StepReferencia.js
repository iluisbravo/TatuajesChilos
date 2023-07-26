import { Button } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Styles = styled.div`
    .hide{         
        display:none;       
    }

    .imgRef{
        object-fit: contain;
    }
`;

const StepReferencia = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;

    const refButton1 = React.useRef();
    const refButton2 = React.useRef();
    const refButton3 = React.useRef();

    const [file1, setFile1] = React.useState(null);
    const [img1, setimg1] = React.useState(null);
    const [fileName1, setNameFile1] = React.useState("Selecciona imagen 1");

    const [file2, setFile2] = React.useState(null);
    const [img2, setimg2] = React.useState(null);
    const [fileName2, setNameFile2] = React.useState("Selecciona imagen 2");

    const [file3, setFile3] = React.useState(null);
    const [img3, setimg3] = React.useState(null);
    const [fileName3, setNameFile3] = React.useState("Selecciona imagen 3");

    React.useEffect(() => {
        setFile1(wizard.foto1);
        setFile2(wizard.foto2);
        setFile3(wizard.foto3);

        setimg1(wizard.img1 || wizard.imgDefault);
        setimg2(wizard.img2 || wizard.imgDefault);
        setimg3(wizard.img3 || wizard.imgDefault);

        if (wizard.foto1 || wizard.foto2 || wizard.foto3) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, []);

    const [open, setOpen] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const modalAlert = () => {
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Aviso</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {modalMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            Aceptar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

    const showModal = (message) => {
        setModalMessage(message);
        setOpen(message);
    }

    const onclickFile1 = () => {
        refButton1.current.click()
    }
    const onclickFile2 = () => {
        refButton2.current.click()
    }
    const onclickFile3 = () => {
        refButton3.current.click()
    }

    const deleteImage = (evt) => {

        const btn = evt.currentTarget.name;

        switch (btn) {
            case "img1":
                setimg1(wizard.imgDefault);
                setFile1(null);
                setNameFile1(null);
                refButton1.current.value = "";

                wizard.img1 = null;
                wizard.foto1 = null;
                break;
            case "img2":
                setimg2(wizard.imgDefault);
                setFile2(null);
                setNameFile2(null);
                refButton2.current.value = "";

                wizard.img2 = null;
                wizard.foto2 = null;
                break;
            case "img3":
                setimg3(wizard.imgDefault);
                setFile3(null);
                setNameFile3(null);
                refButton3.current.value = "";

                wizard.img3 = null;
                wizard.foto3 = null;
                break;

            default:
                break;
        }

        setWizard(wizard);

        if (wizard.foto1 || wizard.foto2 || wizard.foto3) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    const handleFileUpload1 = async event => {

        const file = event.target.files[0];
        if (file) {
            if (validImage(file)) {

                if (validImageSize(file)) {
                    let nameFile = file.name;
                    let file64 = await convertBase64(event.target.files);
                    let urlFile = URL.createObjectURL(file);

                    wizard.foto1 = file64;
                    wizard.img1 = urlFile;
                    setWizard(wizard);

                    setDisabled(false);
                    setimg1(urlFile);
                    setNameFile1(nameFile);
                    setFile1(file64);
                }
                else {
                    //pesa mas de 5mb
                    showModal("La imagen debe pesar menos de 5MB, seleccione otra.");
                }
            } else {
                //no es una imagen valida
                showModal("El archivo debe ser una imagen válida (png, jpeg o jpg), seleccione otro.")
            }
        }
    };

    const handleFileUpload2 = async event => {
        const file = event.target.files[0];
        if (file) {
            if (validImage(file)) {

                if (validImageSize(file)) {
                    let nameFile = file.name;
                    let file64 = await convertBase64(event.target.files);
                    let urlFile = URL.createObjectURL(file);

                    wizard.foto2 = file64;
                    wizard.img2 = urlFile;
                    setWizard(wizard);

                    setDisabled(false);
                    setimg2(urlFile);
                    setNameFile2(nameFile);
                    setFile2(file64);
                }
                else {
                    //pesa mas de 5mb
                    showModal("La imagen debe pesar menos de 5MB, seleccione otra.");
                }
            } else {
                //no es una imagen valida
                showModal("El archivo debe ser una imagen válida (png, jpeg o jpg), seleccione otro.")
            }
        }
    };

    const handleFileUpload3 = async event => {
        const file = event.target.files[0];
        if (file) {
            if (validImage(file)) {

                if (validImageSize(file)) {
                    let nameFile = file.name;
                    let file64 = await convertBase64(event.target.files);
                    let urlFile = URL.createObjectURL(file);

                    wizard.foto3 = file64;
                    wizard.img3 = urlFile;
                    setWizard(wizard);

                    setDisabled(false);
                    setimg3(urlFile);
                    setNameFile3(nameFile);
                    setFile3(file64);
                }
                else {
                    //pesa mas de 5mb
                    showModal("La imagen debe pesar menos de 5MB, seleccione otra.");
                }
            } else {
                //no es una imagen valida
                showModal("El archivo debe ser una imagen válida (png, jpeg o jpg), seleccione otro.")
            }
        }
    };

    const convertBase64 = async (archivos) => {

        return new Promise((res, rej) => {

            try {
                Array.from(archivos).forEach(archivo => {
                    var reader = new FileReader();
                    reader.readAsDataURL(archivo)
                    reader.onload = function () {
                        var base64 = reader.result;
                        console.log(base64)

                        // wizard.foto = base64;
                        // setWizard(wizard);

                        res(base64);
                    }
                })
            } catch (err) {
                rej(err);
            }
        });
    }

    const validImage = (file) => {
        if (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpeg") {
            return true;
        }
        else {
            return false
        }
    }

    const validImageSize = (file) => {
        if (file.size / 1024 / 1024 <= 5) {
            return true;
        }
        else {
            return false
        }
    }


    return (
        <>
            <Styles>
                <div >
                    {modalAlert()}
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <p>Ingrese una imagén de referencia (máximo 3)</p>
                            <ul>
                                <li>Imagenes válidas (png, jpeg y jpg).</li>
                                <li>No mayores a 5MB.</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} md={4} className="text-center">
                            <img className="imgRef" height="100px" width="100px" src={img1} alt="file1.img" />
                            <br />
                            <br />
                            <input type="file" className="hide" ref={refButton1} onChange={handleFileUpload1} accept="image/png, image/jpg, image/jpeg"></input>
                            <TextField className="hide" disabled placeholder={fileName1} variant="outlined" size="small" multiline></TextField>



                            {
                                !file1 && (
                                    <Button
                                        variant="contained"
                                        onClick={onclickFile1}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Subir Imagen 1
                                    </Button>
                                )
                            }

                            {
                                file1 && (
                                    <Button
                                        name="img1"
                                        variant="contained"
                                        onClick={deleteImage}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Cancelar
                                    </Button>
                                )
                            }


                        </Grid>
                        <Grid item xs={12} md={4} className="text-center">

                            <img className="imgRef" height="100px" width="100px" src={img2} alt="file2.img" />
                            <br />
                            <br />

                            <input type="file" className="hide" ref={refButton2} onChange={handleFileUpload2} accept="image/png, image/jpg, image/jpeg"></input>
                            <TextField className="hide" disabled placeholder={fileName2} variant="outlined" size="small" multiline></TextField>

                            {
                                !file2 && (
                                    <Button
                                        variant="contained"
                                        onClick={onclickFile2}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Subir Imagen 2
                                    </Button>
                                )
                            }

                            {
                                file2 && (
                                    <Button
                                        name="img2"
                                        variant="contained"
                                        onClick={deleteImage}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Cancelar
                                    </Button>
                                )
                            }


                        </Grid>
                        <Grid item xs={12} md={4} className="text-center">
                            <img className="imgRef" height="100px" width="100px" src={img3} alt="file3.img" />
                            <br />
                            <br />

                            <input type="file" className="hide" ref={refButton3} onChange={handleFileUpload3} accept="image/png, image/jpg, image/jpeg"></input>
                            <TextField className="hide" disabled placeholder={fileName3} variant="outlined" size="small" multiline></TextField>

                            {
                                !file3 && (
                                    <Button
                                        variant="contained"
                                        onClick={onclickFile3}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Subir Imagen 3
                                    </Button>
                                )
                            }

                            {
                                file3 && (
                                    <Button
                                        name="img3"
                                        variant="contained"
                                        onClick={deleteImage}
                                        startIcon={<DeleteIcon />}
                                    >
                                        Cancelar
                                    </Button>
                                )
                            }

                        </Grid>
                    </Grid>
                    <br />

                </div>
            </Styles>

        </>
    )
}

export default StepReferencia;