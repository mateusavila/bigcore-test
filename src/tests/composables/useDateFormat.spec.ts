import { describe, it, expect } from "vitest"

import { useDateFormat } from "../../composables/useDateFormat"
import { format } from 'date-fns'



describe("useDateFormat", () => {

  const { formatDate, formatDateToUTC, formatToSubmit } = useDateFormat()
  it('should format the date to start the day', async () => {

    const date = new Date(2024, 9, 28) // 9 é outubro.
    const dateFormat = format(date, "yyyy-MM-dd")
    const dateToSubmit = formatToSubmit(dateFormat, false)

    expect(dateToSubmit).toBe('2024-10-28T00:00:00Z')
  })

  it('should format the date to end the day', async () => {

    const date = new Date(2024, 9, 28) // 9 é outubro.
    const dateFormat = format(date, "yyyy-MM-dd")
    const dateToSubmit = formatToSubmit(dateFormat, true)

    expect(dateToSubmit).toBe('2024-10-28T23:59:59Z')
  })

  it('should format the date to consider timezone', async () => {

    const date = new Date(2024, 9, 28)
    const dateFormatUTC = formatDateToUTC(date)

    expect(new Date(dateFormatUTC).toISOString()).toBe('2024-10-28T03:00:00.000Z')
  })

  it('should format the date to pattern dd/MM/yyyy HH:mm', async () => {

    const date = '2024-10-28T03:00:00.000Z'
    const dateFormat = formatDate(date)

    expect(dateFormat).toBe('28/10/2024 00:00')
  })



})