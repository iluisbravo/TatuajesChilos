import React from 'react';

const StepNombre = (props) => {
    let wizard = props.wizard;
    let setWizard = props.setWizard;
    let setDisabled = props.setDisabledFunc;

    React.useEffect(() => {

        setDisabled(false);

    }, []);

    return (
        <>
            <div >
                <p>Certifico que soy mayor de edad con 18 años cumplidos o más. O en caso de ser menor de edad, tu papá o guardián legal deberá acudir contigo a la cita.</p>
            </div>
        </>
    )
}

export default StepNombre;