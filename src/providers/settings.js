

const Settings = (() =>{
    const apiURL = 'https://tc-webapi.herokuapp.com';
    return {
        GetStatus: async ()=>{
            try{
                const url = `${apiURL}/status`;
                const rawRespose = await fetch(url);
                const response = rawRespose.json();
                return response;
            }catch(e){
                console.error(e);
            }
        }
    }
})();

export default Settings;