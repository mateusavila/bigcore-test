import { describe, it, expect, beforeEach } from "vitest"
import { usePaginationStore } from "../../stores/pagination"
import { setActivePinia, createPinia } from 'pinia'

describe("usePaginationStore", () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('should return the default values', async () => {
    const { paged, perPaged } = usePaginationStore()

    expect(paged).toBe(1)
    expect(perPaged).toBe(10)
  })

  it('should update the values', async () => {
    const p = usePaginationStore()

    p.updatePage(2)
    p.updatePerPage(20)

    expect(p.paged).toBe(2)
    expect(p.perPaged).toBe(20)
  })

})