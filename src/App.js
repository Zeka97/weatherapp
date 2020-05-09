import React,{ useEffect, useState} from 'react';

import Searchbar from './searchbar.component/searchbar.component';
import Weatherdisplay from './weatherdisplay/weatherdisplay.component';
import './App.css';

import { setCurrentCity } from './redux/city.action';

import { connect } from 'react-redux';

const App = ({ setCurrentCity, loading  }) => {

const [value, setValue] = useState({city:"Sarajevo"});
const [button, setButton] = useState(false);

const handleChange = (event) => {
  setValue({
    city: event.target.value
  });
};

console.log(value.city);

const handleSubmit = (e) => {
  e.preventDefault();
  setButton({
    button: !button
  });
};

 
useEffect(() => {

  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value.city}&appid=e90a6a6c93670f061604b464307cb24b`)
  .then(response => response.json())
  .then(data =>{
    setCurrentCity({
      id: data.city.id,
      name: data.city.name,
      list:data.list
    });
    setValue({
      city:''
    });
  })
  .catch(err => {
    setValue({
      city:''
    });
    alert("No city found!");
  })
},[button])
    return (
    <div className="App">
      <div className="Header">
          <Searchbar value={value.city} handleChange={handleChange} handleSubmit={handleSubmit} placeholder="Search for a city..." />
          </div>
            <Weatherdisplay />
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
  setCurrentCity: data => dispatch(setCurrentCity(data))
});

const mapStateToProps = state => ({
  loading:state.weather.loading
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
