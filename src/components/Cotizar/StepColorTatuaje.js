import React from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const StepColorTatuaje = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;
    const [value, setValue] = React.useState('0');

    React.useEffect(() => {
        if (wizard.colorTatuaje !== "") {
            setValue(wizard.colorTatuaje );
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }, []);

    const handleChange = (event) => {
        let colorTatuaje = event.target.value;
        wizard.colorTatuaje = colorTatuaje;
        setWizard(wizard);
        setValue(colorTatuaje);
        setDisabled(false);
    };

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Mi tatuaje será</FormLabel>
                <RadioGroup name="color" value={value} onChange={handleChange}>
                    <FormControlLabel control={<Radio color="primary" />} value="Color" label="Color" />
                    <FormControlLabel control={<Radio color="primary" />} value="Blanco y Negro" label="Blanco y Negro" />
                </RadioGroup>
            </FormControl>
            <br />
        </>
    )
}

export default StepColorTatuaje;