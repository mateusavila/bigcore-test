import { describe, it, expect } from "vitest"
import { useCleanURL } from "../../composables/useCleanURL"


describe("useCleanURL", () => {
  it('should create a valid queryString string', async () => {
    const { buildQueryString } = useCleanURL()
    const mockOptions = {
      rows: 10,
      page: 1,
      divisionId: [],
      licensePlate: '',
      startDate: null,
      endDate: ''
    }

    const url = buildQueryString(mockOptions)
    expect(url).toBe('rows=10&page=1')
  })

  it('should create a valid queryString string with array value', async () => {
    const { buildQueryString } = useCleanURL()
    const mockOptions = {
      rows: 10,
      page: 1,
      divisionId: [42, 44],
      licensePlate: '',
      startDate: null,
      endDate: ''
    }

    const url = buildQueryString(mockOptions)

    expect(url).toBe('rows=10&page=1&divisionId=42%2C44')
  })

  it('should return empty', async () => {
    const { buildQueryString } = useCleanURL()
    const mockOptions = {
      rows: '',
      divisionId: [],
      licensePlate: '',
      startDate: null,
      endDate: ''
    }

    const url = buildQueryString(mockOptions)

    expect(url).toBe('')
  })

  it('should clear empty object', async () => {
    const { buildQueryString } = useCleanURL()
    const mockOptions = {
      rows: {},
      divisionId: [],
      licensePlate: '',
      startDate: null,
      endDate: ''
    }

    const url = buildQueryString(mockOptions)

    expect(url).toBe('')
  })
})