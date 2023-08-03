import { NavigationArrow } from '@phosphor-icons/react'
import { CurrentWeather } from '../../../..'
import './styles.scss'

interface HighlightProps {
  currentWeather: CurrentWeather | undefined
}

export function Highlights({ currentWeather }: HighlightProps) {
  return (
    <div className="highlights">
      <h2>Today's Highlights</h2>
      <div className="grid-highlights">
        <div className="wind-status">
          <span>Wind Status</span>
          <h3>
            {currentWeather?.wind_mph} <p>mph</p>
          </h3>
          <footer>
            <div>
              <NavigationArrow size={16} color="#E7E7EB" weight="fill" />
            </div>
            <p>WSW</p>
          </footer>
        </div>
        <div className="humidity">
          <span>Humidity</span>
          <h3>
            {currentWeather?.humidity} <p>%</p>
          </h3>
          <input
            type="range"
            min={0}
            max={100}
            value={currentWeather?.humidity || 0}
            readOnly
          />
        </div>
        <div className="visibility">
          <span>Visibility</span>
          <h3>
            {currentWeather?.vis_miles} <p>miles</p>
          </h3>
        </div>
        <div className="air-pressure">
          <span>Air Pressure</span>
          <h3>
            {currentWeather?.pressure_mb} <p>mb</p>
          </h3>
        </div>
      </div>
    </div>
  )
}
