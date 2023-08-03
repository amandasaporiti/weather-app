import { MapPin } from '@phosphor-icons/react'
import { CurrentWeather, Forecast, Location } from '../../..'
import './styles.scss'
import { formatCurrentDay } from '../../../../../utils/formatDate'

interface WeatherDataProps {
  currentWeather: CurrentWeather | undefined
  location: Location | undefined
  temperature: 'celsius' | 'fahrenheit'
  forecast: Forecast[]
}

export function WeatherData({
  currentWeather,
  temperature,
  location,
  forecast,
}: WeatherDataProps) {
  return (
    <div className="weather-information">
      <img
        src={currentWeather?.condition.icon}
        alt="Current Weather Condition"
        className="current-weather-icon"
      />

      {temperature === 'celsius' ? (
        <h2 className="temperature">
          {Math.floor(currentWeather?.temp_c || 0)}
          <span>°C</span>
        </h2>
      ) : (
        <h2 className="temperature">
          {currentWeather?.temp_f}
          <span>°F</span>
        </h2>
      )}

      <p className="weather-condition">{currentWeather?.condition.text}</p>

      <div className="weather-date">
        <span>Today</span>
        {forecast &&
          forecast.map(
            (item, index) =>
              index === 0 && (
                <span key={index} className="separator">
                  {formatCurrentDay(String(item.date))}
                </span>
              ),
          )}
      </div>
      <div className="weather-location">
        <MapPin size={24} color="#88869D" weight="fill" />
        <span>{location?.name}</span>
      </div>
    </div>
  )
}
