import React from 'react';
import './weatherhoursdisplay.styles.scss';




const Weatherhoursdisplay = ({item}) => (
    <div className="day">
        {
            item.weather.map(key =>(
                <img key={key.id} src={`http://openweathermap.org/img/wn/${key.icon}.png`} alt={key.description} />
            ))
        }

        <span className="temperatura">{parseInt(item.main.temp - 273.15)}°C</span>
        <span>{item.dt_txt.replace(/\d+-\d+-\d+/,"")}</span>





    </div>
);

export default Weatherhoursdisplay;