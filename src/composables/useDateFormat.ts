import { format, parseISO } from 'date-fns'

export const useDateFormat = () => {
  const formatDate = (date: string) => {
    const isoDate = parseISO(date)
    return format(isoDate, 'dd/MM/yyyy HH:mm')
  }

  return {
    formatDate
  }
}