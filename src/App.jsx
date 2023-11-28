import axios from "axios";
import { useEffect, useState } from "react";
import WeatherDetail from "./components/WeatherDetail";

function App() {
  
  //? https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=c8424966a8639e716cf2037ea074244d

  //? Vamos a almacenar la información que nos genera la API y que se visualizo por consola despues del then y catch en un useState (estado)
  const [weather, setWeather] = useState(null);
    

  //tanto success como pos son solo nombres representativos, la idea es aplicar lógica para dar los nombres
  //Para obtener las coordenadas se puede hacer mediantes notación de punto o desestructuración.
  //const lat = pos.coords.latitude y const lat = pos.coords.longitude
  //desestructuración const {coords} = pos; 
  //para desestructurar algo que ya esta desestructurado usamos la notación de :
  //const {coords: { latitude, longitude },} = pos;
  const success = (pos) => {
      console.log(pos);
      const {coords: {latitude,longitude},} = pos;
      
      //?Realizamos la peticion a la API con axios
      
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c8424966a8639e716cf2037ea074244d&lang=es&units=metric`)
      .then(({data}) => setWeather(data))
      .catch((err) => console.log(err))
      
  }
  
  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(success);

  },[])

  return (
    <main className='flex justify-center items-center h-screen bg-[url(/images/image1.png)] bg-no-repeat bg-cover bg-black text-white'>
    
    {weather? <WeatherDetail weather={weather}/> : <span>Cargando...</span> }
    
      
    </main>
  )
}

export default App
