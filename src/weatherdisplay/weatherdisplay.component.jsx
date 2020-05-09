import React from 'react';
import './weatherdisplay.styles.scss';

import Weatherhoursdisplay from '../threehrsdisplay/weatherhoursdisplay.component';
import { connect } from 'react-redux';

import { selectCollection } from '../redux/weather.selector';




const Weatherdisplay = ( {collection, loading} ) =>{
    let today = new Date();
    let day = today.getDay();
    let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let currentDay=daylist[day];
    let hours = today.getHours();
    let minutes = today.getMinutes();
    
    console.log(today.getTime());

    console.log(collection);
    return( 

    !loading ?
    (
    <div className="display">
        <div className="container-display">
        
            <div className="main-display">
                <div className="titledisplay">
                    <span className="title">{collection.name}</span>
                    <span className="temperatura">{parseInt(collection.list[0].main.temp - 273.15)}°C</span>
                    <img key={collection.list[0].weather[0].id} src={`http://openweathermap.org/img/wn/${collection.list[0].weather[0].icon}@2x.png`} alt={collection.list[0].weather[0].description} />
                    <span className="trenutnovrijeme">{collection.list[0].weather[0].main}</span>
                </div>
                <div className="dateandday">{currentDay} {hours}:{minutes}{hours > 12 ? " PM": " AM"}</div>
                <div className="ostalipodaci">
                    <div className="leftbox">
                        <span>Wind: {collection.list[0].wind.speed} m/s</span>
                        <span>Pressure: {collection.list[0].main.pressure}hPa</span>
                    </div>
                    <div className="rightbox">
                        <span>Humidity: {collection.list[0].main.humidity}%</span>
                        <span>Cloudiness: {collection.list[0].clouds.all}%</span>
                    </div>
                 </div>

                <div className="threehoursdisplay">

                {
                    collection.list.filter((item,index)=>(index >0 && index <= 8)).map(item => (
                    <Weatherhoursdisplay key={item.dt} item={item}/>
                     ))
                }
                
                </div>
            </div>
    
        </div>
    </div>
    )
    :null
    )
            }
    
const mapStateToProps = state => ({
    collection: selectCollection(state),
    loading:state.weather.loading
})

export default connect(mapStateToProps)(Weatherdisplay);