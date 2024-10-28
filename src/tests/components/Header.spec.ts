import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import Header from "../../components/Header.vue"

describe("Header.vue", () => {
  it('should change the search term', async () => {
    const wrapper = mount(Header, {})
    expect(wrapper.find("h1").text()).toBe('Teste Técnico - BIGCORE')
  })
})