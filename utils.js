const { default: axios } = require("axios");

//`https://cegibat-api.grddev.com/1.0/dju/result?origin=Cegibat&station_meteo=01089001&usage=CH&methode_calcul=ME&temperature_reference=19&date_debut=2009-01-01&date_fin=2021-06-15&date_debut_formatted=01/01/2007&date_fin_formatted=15/06/2021`

function getCegidApi(stationId, usage, methode_calcul, temperature_reference, start_date, end_date){
    return axios.get(`https://cegibat-api.grddev.com/1.0/dju/result?origin=Cegibat&station_meteo=${stationId}&usage=${usage}&methode_calcul=${methode_calcul}&temperature_reference=${temperature_reference}&date_debut=${start_date}&date_fin=${end_date}&date_debut_formatted=${start_date}&date_fin_formatted=${end_date}`)
    .then((res)=>{
        console.log("TEST",res.data);
        return res.data;
    })
    .catch((err)=> {
        console.log(err)
    })
}


function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDay()}`
}


module.exports = {
    getCegidApi: getCegidApi,
    formatDate: formatDate
}