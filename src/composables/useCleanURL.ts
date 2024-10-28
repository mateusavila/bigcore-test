export const useCleanURL = () => {

  function buildQueryString(params: any) {

    const validEntries = Object.entries(params)
      .filter(([_, value]) =>
        value !== null &&
        value !== undefined &&
        !(typeof value === 'string' && value.trim() === '') &&
        !(Array.isArray(value) && value.length === 0) &&
        !(typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0)
      )
      .map(([key, value]) => [key, String(value)])

    if (validEntries.length) {
      return new URLSearchParams(validEntries as [string, string][]).toString()
    }

    return ''
  }
  return {
    buildQueryString
  }
}