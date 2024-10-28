import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import CardTitle from "../../components/CardTitle.vue"

describe("CardTitle.vue", () => {
  it('should change the search term', async () => {
    const wrapper = mount(CardTitle, {
      slots: {
        default: 'Teste de componente'
      }
    })
    expect(wrapper.text()).toBe('Teste de componente')
  })
})