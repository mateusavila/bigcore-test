import { format, parseISO, startOfDay, endOfDay } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

export const useDateFormat = () => {
  const formatDate = (date: string) => {
    const isoDate = parseISO(date)
    return format(isoDate, 'dd/MM/yyyy HH:mm')
  }

  const formatDateToUTC = (date: Date) => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return toZonedTime(date, timeZone)
  }

  const formatToSubmit = (date: string, isEndDay: boolean) => {
    let configDate
    if (!isEndDay) {
      configDate = startOfDay(parseISO(date))
    }
    if (isEndDay) {
      configDate = endOfDay(parseISO(date))
    }

    return format(formatDateToUTC(configDate as Date), "yyyy-MM-dd'T'HH:mm:ss'Z'")
  }

  return {
    formatDate,
    formatDateToUTC,
    formatToSubmit
  }
}