const Deal = (() => {

    const apiURL = 'https://tc-webapi.herokuapp.com';
    return {
        New: async (contactid, { nombre, apellido, dealname, parte_del_cuerpo_a_tatuar, alto_del_tatuaje, ancho_del_tatuaje, color_de_tatuaje, comentarios_adicionales, color_de_piel, foto1, foto2, foto3 }) => {
            try {
                const request =
                {
                    nombre,
                    apellido,
                    dealname,
                    parte_del_cuerpo_a_tatuar,
                    alto_del_tatuaje,
                    ancho_del_tatuaje,
                    color_de_tatuaje,
                    comentarios_adicionales,
                    color_de_piel,
                    foto1,
                    foto2,
                    foto3
                };
                const httpMethod =
                {
                    method: 'POST',
                    body: JSON.stringify(request),
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    }
                };
                const url = `${apiURL}/deal/${contactid}`;
                const result = await fetch(url, httpMethod);
                const resp = await result.json();
                return resp;
            } catch (e) {
                console.error(e);
                return { isOk: false, message: e.message };
            }
        }
    }

})();

export default Deal;


// funcion para buscar si se debe mostrar el boton cotizar
// criterio consulta datos contacto propiedad permititir cotizar 