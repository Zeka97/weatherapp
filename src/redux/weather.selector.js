import { createSelector } from 'reselect';

export const selectWeather = state => state.weather;

export const selectCollection = createSelector(
    [selectWeather],
    (weather) => weather.collection
);