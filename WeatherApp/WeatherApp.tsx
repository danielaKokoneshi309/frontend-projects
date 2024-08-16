
  import React from 'react';
  import styles from './WeatherApp.module.css';
  import { TiWeatherPartlySunny } from "react-icons/ti";
  interface Props {
    weatherStates: string[];
    currentDate: object; 
    weatherTemperature : number[];
    
  }
  
  const WeatherCard: React.FC<Props> = ({ weatherStates,currentDate,weatherTemperature}) => {
   
    const getRandomWeather = () => {
        
      const randomIndex = Math.floor(Math.random() * weatherStates.length);
      return weatherStates[randomIndex];
    };

    const getCurrentDate = ()=> {
      
      return currentDate.toString();
    }
    const getCurrentTemperature = ()=> {
      const randomIndex = Math.floor(Math.random() * weatherStates.length);
     
      return weatherTemperature[randomIndex];
    }

    return (
     
      <div className={styles.App}>
<div >
<TiWeatherPartlySunny className={styles.weatherIcon} />

        <h2 className={styles.cityName}>{getCurrentDate().toString()}</h2>

        <div className={styles.cityName}>
          {getRandomWeather()} 
        </div>
        <div className={styles.cityName} >
          {getCurrentTemperature()}°C
        </div>
      </div>
      </div>
      
    );
  }
  
  export default WeatherCard;
  