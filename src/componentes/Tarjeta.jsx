import React, { useState } from "react";
import Formulario from "./Formulario";
import Card from "./Card";

const Tarjeta = () => {
    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=3713001f6aa8c1674af1d3c2df8fe719&lang=es";
    let ciudadUrl = "&q=";

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=3713001f6aa8c1674af1d3c2df8fe719&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {
        setCargando(true);
        setLocation(loc);
        urlClima = urlClima + ciudadUrl + loc;


        //Clima
        await fetch(urlClima).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((climaData) => {
            console.log(climaData);
            setWeather(climaData);
        }).catch(error => {
            console.log(error);
            setCargando(false);
            setShow(false);
        });

        //Prediccion Siguiente

        urlForecast = urlForecast + ciudadUrl + loc;

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setCargando(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setCargando(false);
            setShow(false);
        });



    }

    return (
        <React.Fragment>
            <Formulario newLocation={getLocation} />
            <Card showData={show} cargandoData={cargando} weather={weather} forecast={forecast}/>
        </React.Fragment>
    )

}

export default Tarjeta;