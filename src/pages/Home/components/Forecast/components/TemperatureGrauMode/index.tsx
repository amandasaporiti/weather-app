import * as RadioGroup from '@radix-ui/react-radio-group'
import './styles.scss'

interface TemperatureGrauModeProps {
  onConvertToCelsius: () => void
  onConvertToFahrenheit: () => void
}
export function TemperatureGrauMode({
  onConvertToCelsius,
  onConvertToFahrenheit,
}: TemperatureGrauModeProps) {
  return (
    <RadioGroup.Root className="temperature-grau-mode">
      <RadioGroup.Item value="celsius" asChild>
        <button type="button" onClick={onConvertToCelsius}>
          °C
        </button>
      </RadioGroup.Item>
      <RadioGroup.Item value="fahrenheit" asChild>
        <button type="button" onClick={onConvertToFahrenheit}>
          °F
        </button>
      </RadioGroup.Item>
    </RadioGroup.Root>
  )
}
