import axios from 'axios'

const key = import.meta.env.VITE_ACCESS_KEY_WEATHER_API

export const api = axios.create({
  baseURL: 'http://api.weatherapi.com/v1/forecast.json',
  params: {
    key: key,
    q: 'Curitiba',
    days: 6,
    aqi: false,
    alerts: true,
  },
})
