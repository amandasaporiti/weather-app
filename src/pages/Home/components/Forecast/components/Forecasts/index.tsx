import { Forecast } from '../../../..'
import { formattedDaysOnWeek } from '../../../../../../utils/formatDate'
import './styles.scss'

interface ForecastsProps {
  forecast: Forecast[]
  temperature: 'celsius' | 'fahrenheit'
}

export function Forecasts({ forecast, temperature }: ForecastsProps) {
  return (
    <div className="forecast">
      {forecast &&
        forecast.map(
          (weather, index) =>
            index > 0 && (
              <div key={index}>
                <p>{formattedDaysOnWeek(String(weather.date))}</p>
                <img src={weather.day.condition.icon} alt="" />
                <footer>
                  {temperature === 'celsius' ? (
                    <span title="máxima">
                      {Math.floor(weather.day.maxtemp_c)}°C
                    </span>
                  ) : (
                    <span title="máxima">
                      {Math.floor(weather.day.maxtemp_f)}°F
                    </span>
                  )}
                  {temperature === 'celsius' ? (
                    <span title="mínima" className="min-temperature">
                      {Math.floor(weather.day.mintemp_c)}°C
                    </span>
                  ) : (
                    <span title="mínima" className="min-temperature">
                      {Math.floor(weather.day.mintemp_f)}°F
                    </span>
                  )}
                </footer>
              </div>
            ),
        )}
    </div>
  )
}
