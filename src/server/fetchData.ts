import { api } from './api'

export async function fetchCurrentWeather() {
  const {
    data: { current },
  } = await api.get('')

  return current
}

export async function fetchLocation() {
  const {
    data: { location },
  } = await api.get('')

  return location
}

export async function fetchForecast() {
  const {
    data: {
      forecast: { forecastday },
    },
  } = await api.get('')
  return forecastday
}
