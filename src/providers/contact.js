import validator from 'validator'



const Contacts = (() => {
    const apiURL = 'https://tc-webapi.herokuapp.com/contact'
    return {
        New: async ({ firstname, lastname, phone, email, confirmacion_de_edad }) => {
            //Validaciones
            if (!firstname)
                return { isOk: false, message: 'No se ha especificado el primer nombre' };
            if (!lastname)
                return { isOk: false, message: 'No se ha especificado el apellido' };
            if (!validator.isMobilePhone(phone))
                return { isOk: false, message: 'Ingrese un telefono valido' };
            if (!validator.isEmail(email))
                return { isOk: false, message: 'Ingrese un email valido' };
            if (!confirmacion_de_edad)
                return { isOk: false, message: 'No ha confirmado su edad' };

            const data = {
                firstname,
                lastname,
                phone,
                email,
                confirmacion_de_edad
            }

            const url = `${apiURL}`;
            var params = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "content-type": 'application/json'
                },
                // mode: 'no-cors',
                cache: 'default'
            };

            const rawResponse = await fetch(url, params);
            if (rawResponse.status == 200) {
                // const {body} = rawRespose;
                // console.log(body.json());
                const responseData = await rawResponse.json();
                const result = responseData;
                return result;
            }
            return { isOk: false };

        },
        GetByEmail: async (email) => {
            try {
                const url = `${apiURL}/ByEmail/${email}`;
                const rawResponse = await fetch(url);
                const responseData = await rawResponse.json();
                const response = responseData;
                return response;
            } catch (e) {
                console.error(e);
            }
        },
        GetByPhone: async (phone) => {
            try {
                const url = `${apiURL}/ByPhone/${phone}`;
                const rawResponse = await fetch(url);
                const responseData = await rawResponse.json();
                const response = responseData;
                return response;
            } catch (e) {
                console.error(e);
            }
        }
    }
})();

export default Contacts;


