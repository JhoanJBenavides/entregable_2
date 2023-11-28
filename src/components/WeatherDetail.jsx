import { useState } from "react";

const WeatherDetail = ({ weather }) => {
  console.log(weather);

  const celsiusToFahrenheit = (tempCelsius) => {
    const tempF = (tempCelsius * (9 / 5) + 32).toFixed(1);
    return tempF;
  };

  const [celsius, setCelsius] = useState(true);
  const handleChange = () => {
    setCelsius(!celsius);
  };

  return (
    <article className="text-center grid gap-4 ">
      <h3 className="text-black text-3xl sm:text-5xl">
        {weather.name} , {weather.sys.country}
      </h3>

      <div className="text-black grid gap-3">
        {/* Seccion 1 : Temperatura, descripcion e imagen*/}
        <section className="bg-white/40 p-2 rounded-xl grid grid-cols-2 items-center">
          <h3 className="col-span-2  text-black text-3xl">
            {weather.weather[0].description}
          </h3>
          {/* La temperatura esta en grados fahrenheit, falta dar funcionalidad al boton */}
          <span className="text-3xl sm:text-5xl">
            {celsius
              ? `${weather.main.temp} °C`
              : celsiusToFahrenheit(weather.main.temp) + "°F"}
          </span>
          <div>
            <img
              className="block mx-auto"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
        </section>

        {/* Seccion 2 : Detalles adicionales del clima*/}
        <section className="grid grid-cols-3 justify-items-center bg-white/40 p-2 rounded-xl">
          <div>
            <div className="flex gap-1">
              <img src="/icons/windn.svg" alt="icono de el viento" />
            </div>
            <span className=" text-black text-3xl">
              {weather.wind.speed} m/s
            </span>
          </div>
          <div>
            <div className="flex gap-1">
              <img src="/icons/humidityn.svg" alt="icono de la humedad" />
            </div>
            <span className=" text-black text-3xl">
              {weather.main.humidity} %
            </span>
          </div>

          <div className="flex gap-1">
            <div>
              <img src="/icons/pressuren.svg" alt="icono de la presión" />
            </div>
            <span className=" text-black text-3xl">
              {weather.main.pressure} hPa
            </span>
          </div>
        </section>
      </div>

      <button
        onClick={handleChange}
        className="bg-white/40 p-2 border-3 text-black text-3xl rounded-xl"
      >
        {celsius ? "Cambiar a °F" : "Cambiar a °C"}
      </button>
    </article>
  );
};
export default WeatherDetail;
