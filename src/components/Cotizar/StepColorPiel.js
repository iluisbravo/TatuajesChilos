import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';



const StepColorPiel = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;

    const [selectedValue, setSelectedValue] = React.useState('a');

    React.useEffect(() => {
        if (wizard.colorPiel !== "") {
            setSelectedValue(wizard.colorPiel );
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, []);

    const handleChange = (event) => {
        let tipoPiel = event.target.value;
        wizard.colorPiel = tipoPiel;
        setWizard(wizard);
        setSelectedValue(tipoPiel);
        setDisabled(false);
    };
    return (
        <>
            <div >
                <p>Mi color de piel es:</p>
            </div>
            <div>
                <div style={{ backgroundColor: '#faffeb', width: '150px', color: "black", fontWeight: 900 }}>
                    <Radio
                        checked={selectedValue === 'Tipo I'}
                        onChange={handleChange}
                        value="Tipo I"
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                        label="hola"
                        color="primary"
                    />Tipo I
                </div>
                <div style={{ backgroundColor: '#ffeccb', width: '150px', color: "black", fontWeight: 900 }}>
                    <Radio
                        checked={selectedValue === 'Tipo II'}
                        onChange={handleChange}
                        value="Tipo II"
                        name="radio-button-demo"
                        //inputProps={{ 'aria-label': 'B' }}
                        color="primary"
                    />Tipo II
                </div>
                <div style={{ backgroundColor: '#efcf78', width: '150px', color: "black", fontWeight: 900 }}>
                    <Radio
                        checked={selectedValue === 'Tipo III'}
                        onChange={handleChange}
                        value="Tipo III"
                        color="primary"
                        //name="radio-button-demo"
                        inputProps={{ 'aria-label': 'D' }}
                    />Tipo III
                </div>
                <div style={{ backgroundColor: '#dca30d', width: '150px', color: "black", fontWeight: 900 }}>
                    <Radio
                        checked={selectedValue === 'Tipo IV'}
                        onChange={handleChange}
                        value="Tipo IV"
                        color="primary"
                        //name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                    />Tipo IV
                </div>
                <div style={{ backgroundColor: '#97754f', width: '150px', color: "black", fontWeight: 900 }}>
                    <Radio
                        checked={selectedValue === 'Tipo V'}
                        onChange={handleChange}
                        value="Tipo V"
                        color="primary"
                        //name="radio-button-demo"
                        inputProps={{ 'aria-label': 'E' }}
                    />Tipo V
                </div>
                <div style={{ backgroundColor: '#713906', width: '150px', color: "black", fontWeight: 900 }}>
                    <Radio
                        checked={selectedValue === 'Tipo VI'}
                        onChange={handleChange}
                        value="Tipo VI"
                        color="primary"
                        label="Bottom"
                    //labelPlacement="bottom"
                    //name="radio-button-demo"
                    //inputProps={{ 'aria-label': 'E' }}
                    />Tipo VI
                </div>
            </div>

            <br />

        </>
    )
}

export default StepColorPiel;