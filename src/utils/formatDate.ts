import { format, parseISO } from 'date-fns'
import enUS from 'date-fns/locale/en-US'

export function formattedDaysOnWeek(date: string) {
  const strDate = date
  const isoDate = parseISO(strDate)
  const formattedDate = format(isoDate, 'EEEE', {
    locale: enUS,
  })
  return formattedDate
}

export function formatCurrentDay(date: string) {
  const strDate = date
  const isoDate = parseISO(strDate)
  const formattedDate = format(isoDate, 'dd MMMM', {
    locale: enUS,
  })
  return formattedDate
}
