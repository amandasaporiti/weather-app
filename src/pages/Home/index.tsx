import './styles.scss'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../server/api'
import { SearchPlacesForm } from './components/CurrentWeather/SearchPlacesForm'
import { TemperatureGrauMode } from './components/Forecast/components/TemperatureGrauMode'
import { Highlights } from './components/Forecast/components/Highlights'
import { Author } from './components/Forecast/components/Author'
import { Forecasts } from './components/Forecast/components/Forecasts'
import { WeatherData } from './components/CurrentWeather/WeatherData'
import {
  fetchCurrentWeather,
  fetchForecast,
  fetchLocation,
} from '../../server/fetchData'

export interface CurrentWeather {
  condition: {
    icon: string
    text: string
  }
  temp_c: number
  temp_f: number
  isDay: number
  humidity: number
  wind_mph: number
  pressure_mb: number
  vis_miles: number
}

export interface Location {
  name: string
}

export interface Forecast {
  date: Date
  day: {
    maxtemp_c: number
    maxtemp_f: number
    mintemp_c: number
    mintemp_f: number
    condition: {
      text: string
      icon: string
    }
  }
}

export function Home() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>()
  const [location, setLocation] = useState<Location>()
  const [forecast, setForecast] = useState<Forecast[]>([])
  const [temperature, setTemperature] = useState<'celsius' | 'fahrenheit'>(
    'celsius',
  )

  const fetchAllWeatherData = useCallback(async () => {
    Promise.all([fetchCurrentWeather(), fetchLocation(), fetchForecast()])
      .then(([current, location, forecastday]) => {
        setCurrentWeather(current)
        setLocation(location)
        setForecast(forecastday)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const fetchSearchLocation = useCallback(async (query: string) => {
    const response = await api.get('', {
      params: {
        q: query,
        days: 6,
      },
    })
    setForecast(response.data.forecast.forecastday)
    setCurrentWeather(response.data.current)
    setLocation(response.data.location)
  }, [])

  useEffect(() => {
    fetchAllWeatherData()
  }, [])

  function handleConvertToCelsius() {
    setTemperature('celsius')
  }
  function handleConvertTemperatureToFahrenheit() {
    setTemperature('fahrenheit')
  }

  return (
    <div className="container">
      {/* Right Side */}
      <div className="current-weather">
        <SearchPlacesForm onFetchSearchPlaces={fetchSearchLocation} />
        <WeatherData
          location={location}
          temperature={temperature}
          currentWeather={currentWeather}
          forecast={forecast}
        />
      </div>
      {/* Left Page */}
      <div className="next-weather">
        <TemperatureGrauMode
          onConvertToCelsius={handleConvertToCelsius}
          onConvertToFahrenheit={handleConvertTemperatureToFahrenheit}
        />
        <Forecasts forecast={forecast} temperature={temperature} />
        <Highlights currentWeather={currentWeather} />
        <Author />
      </div>
    </div>
  )
}
